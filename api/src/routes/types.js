const { Router } = require("express");
const axios = require("axios");
const { Types } = require("../db");

const router = Router();

// GET - get all types and save them into db
router.get("/", async (req, res, next) => {
  try {
    // Call API to get the list of Types and access there
    let typePromiseApi = await axios.get("https://pokeapi.co/api/v2/type");

    let typeDetail = typePromiseApi.data.results;
    // Execute the promise. Then, access the data, map, and return the details
    let typeAllApi = await Promise.all(typeDetail).then((type) => {
      let typeDetails = type.map((details) => {
        return {
          name: details.name,
        };
      });
      return typeDetails;
    });

    await Types.bulkCreate(typeAllApi);

    const types = await Types.findAll();
    res.send(types);

  } catch (err) {
    next(err);
  }
});

module.exports = router;
