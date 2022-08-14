const { Router } = require("express");
const axios = require("axios");
const { Pokemons, Types } = require("../db");
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    let pokePromiseApi;
    let pokeDetail;
    let pokeAllApi;

    const { name } = req.query;
    if (name) {
      // Call API to get the list of Pokemons that match with name
      pokeDetail = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      // Return Pokemon
      let pokeDetails = {
        id: pokeDetail.data.id,
        name: pokeDetail.data.name,
        hp: pokeDetail.data.stats[0].base_stat,
        attack: pokeDetail.data.stats[1].base_stat,
        defense: pokeDetail.data.stats[2].base_stat,
        velocity: pokeDetail.data.stats[5].base_stat,
        height: pokeDetail.data.height,
        weight: pokeDetail.data.weight,
      };
      res.send(pokeDetails);
      
    } else {
      // Call API to get the list of Pokemons
      pokePromiseApi = await axios.get("https://pokeapi.co/api/v2/pokemon");

      // Map the API URL to get the detail of each Pokemon
      pokeDetail = pokePromiseApi.data.results.map((poke) =>
        axios.get(poke.url)
      );
    }

    // Execute the promise. Then, access the data, map, and return the details
    pokeAllApi = await Promise.all(pokeDetail).then((poke) => {
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

    // Find the Pokemons in te DB, map and return.
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

    // Return Pokemons in API and DB.
    let allPokemons = [...pokeAllApi, pokeAllDb];
    res.send(allPokemons);
  } catch (err) {
    next(err);
  }
});

router.get(`/idPokemon`, (req, res, next) => {
  //el id hay que traerlo
  res.send("pokeID");
});

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

router.post("/:pokemonId/types/:typeId", async (req, res, next) => {
  try {
    const { pokemonId, typeid } = req.params;
    const pokemon = await Pokemons.findByPk(pokemonId);
    pokemon.addType(typeid);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
