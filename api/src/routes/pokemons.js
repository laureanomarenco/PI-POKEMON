const { Router } = require("express");
const axios = require("axios");
const { Pokemons, Types } = require("../db");
const router = Router();

// GET - all pokemons or by name
router.get("/", async (req, res, next) => {
  try {
    // Call API to get the list of Pokemons
    let pokePromiseApi = await axios.get("https://pokeapi.co/api/v2/pokemon");

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
          types: details.types.map(t => t.type.name),
          imageDefault: details.sprites.front_default,
          imageShiny: details.sprites.front_shiny,
        };
      });
      return pokeDetails;
    });

    // Find the Pokemons in the DB, map and return.
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
        types: poke.types.map(t => t.name),
        imageDefault: poke.imageDefault,
        imageShiny: poke.imageShiny,
      };
    });

    // Join data in API and DB
    let allPokemons = [...pokeAllApi, ...pokeAllDb];

    // Filter if name is pased by query
    const { name } = req.query;
    if (name) {
      let pokemonByName = allPokemons.filter((poke) => poke.name === name);
      res.send(pokemonByName);
    }

    res.send(allPokemons);
  } catch (err) {
    next(err);
  }
});

// GET - pokemon by id
router.get("/:id", async (req, res, next) => {
  // Call API to get the list of Pokemons
  let pokePromiseApi = await axios.get("https://pokeapi.co/api/v2/pokemon");

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
      };
    });
    return pokeDetails;
  });

  // Find the Pokemons in the DB, map and return.
  let pokePromiseDb = await Pokemons.findAll();
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
    };
  });

  // Join data in API and DB
  let allPokemons = [...pokeAllApi, ...pokeAllDb];

  const { id } = req.params;

  let pokemonById = allPokemons.filter((poke) => poke.id == id);


  res.send(pokemonById);
});

// POST - create a new pokemon
router.post("/", async (req, res, next) => {
  try {
    const { name, hp, attack, defense, velocity, height, weight } = req.body;

    let newPokemon = await Pokemons.findOrCreate({
      where: {
        name,
        hp,
        attack,
        defense,
        velocity,
        height,
        weight,
      },
    });

    res.send(newPokemon);
  } catch (err) {
    next(err);
  }
});

// Create relationship between pokemon and type
router.post("/:pokemonId/types/:typeId", async (req, res, next) => {
  try {
    const { pokemonId, typeId } = req.params;
    const pokemon = await Pokemons.findByPk(pokemonId);
    pokemon.addType(typeId);
  } catch (err) {
    next(err);
  }
});

module.exports = router;