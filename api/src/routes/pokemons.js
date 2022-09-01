const { Router } = require("express");
const axios = require("axios");
const { Pokemons, Types } = require("../db");
const router = Router();

// GET - all Pokemons or by name
router.get("/", async (req, res, next) => {
  try {
    // Call API to get the list of Pokemons
    let pokePromiseApi = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40"
    );

    // Map the API URL to get the detail of each Pokemon
    let pokeDetail = pokePromiseApi.data.results.map((poke) =>
      axios.get(poke.url)
    );

    // Execute the promise. Then, access the data, map, and return the details
    let pokeAllApi = await Promise.all(pokeDetail).then((poke) => {
      let pokemon = poke.map((pokeDetail) => pokeDetail.data);
      let pokeDetails = pokemon.map((details) => {
        return {
          id: details.id,
          name: details.name,
          hp: details.stats[0].base_stat,
          attack: details.stats[1].base_stat,
          defense: details.stats[2].base_stat,
          velocity: details.stats[5].base_stat,
          height: details.height,
          weight: details.weight,
          types: details.types.map((t) => t.type.name),
          imageDefault: details.sprites.front_default,
          imageShiny: details.sprites.front_shiny,
          created: false,
        };
      });
      return pokeDetails;
    });

    // Find the Pokemons in the DB, map and return
    let pokePromiseDb = await Pokemons.findAll({
      include: {
        model: Types,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    let pokeAllDb = pokePromiseDb.map((poke) => {
      return {
        id: poke.id,
        name: poke.name,
        hp: poke.hp,
        attack: poke.attack,
        defense: poke.defense,
        velocity: poke.velocity,
        height: poke.height,
        weight: poke.weight,
        types: poke.types.map((t) => t.name),
        imageDefault: poke.imageDefault,
        imageShiny: poke.imageShiny,
        created: true,
      };
    });

    // Join data in API and DB
    let allPokemons = [...pokeAllApi, ...pokeAllDb];

    // Filter if name is pased by query
    const { name } = req.query;
    if (name) {
      let pokemonByName = allPokemons.filter((poke) => poke.name === name);
      if(pokemonByName.length > 0){
        res.send(pokemonByName)
      } else {
        res.send({msg: "There's no Pokemon with that name"})
      }
    } 
    // If not return all the Pokemon
    else {
      res.send(allPokemons);
    }
  } catch (err) {
    next(err);
  }
});

// GET - Pokemon by id
router.get("/:id", async (req, res, next) => {
  try {
    // Call API to get the list of Pokemons
    const { id } = req.params;

    if (id.length > 4) {
      // Find the Pokemon in the DB by pk, define the data and return
      let pokePromiseDb = await Pokemons.findByPk(id, {
        include: {
          model: Types,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      let pokeAllDb = {
        id: pokePromiseDb.id,
        name: pokePromiseDb.name,
        hp: pokePromiseDb.hp,
        attack: pokePromiseDb.attack,
        defense: pokePromiseDb.defense,
        velocity: pokePromiseDb.velocity,
        height: pokePromiseDb.height,
        weight: pokePromiseDb.weight,
        types: pokePromiseDb.types.map((t) => t.name),
        imageDefault: pokePromiseDb.imageDefault,
        imageShiny: pokePromiseDb.imageShiny,
      };
      res.send(pokeAllDb);
    } else {
      // Do the same process with the API
      let pokePromiseApi = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      let pokeDetails = {
        id: pokePromiseApi.data.id,
        name: pokePromiseApi.data.name,
        hp: pokePromiseApi.data.stats[0].base_stat,
        attack: pokePromiseApi.data.stats[1].base_stat,
        defense: pokePromiseApi.data.stats[2].base_stat,
        velocity: pokePromiseApi.data.stats[5].base_stat,
        height: pokePromiseApi.data.height,
        weight: pokePromiseApi.data.weight,
        types: pokePromiseApi.data.types.map((t) => t.type.name),
        imageDefault: pokePromiseApi.data.sprites.front_default,
        imageShiny: pokePromiseApi.data.sprites.front_shiny,
        created: false,
      };
      res.send(pokeDetails);
    }
  } catch (err) {
    next(err);
  }
});

// POST - create a new Pokemon
router.post("/", async (req, res, next) => {
  try {
    // Destructiring of the data passed in the body
    const {
      name,
      hp,
      attack,
      defense,
      velocity,
      height,
      weight,
      imageDefault,
      imageShiny,
      types,
    } = req.body;

    // Create a new Pokemon
    let [newPokemon, created] = await Pokemons.findOrCreate({
      where: {
        name,
        hp,
        attack,
        defense,
        velocity,
        height,
        weight,
        imageDefault,
        imageShiny,
      },
    });
    // If the Pokemons exists return a msg, else, add Type of Pokemon to create the relation
    if (!created) {
      res.send(`El Pokemon "${name}" ya existe`);
    } else {
      const typeDB = await Types.findAll({
        where: { name: types },
      });
      await newPokemon.addTypes(typeDB);
      res.status(200).send(newPokemon);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
