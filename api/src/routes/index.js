const { Router } = require('express');
const pokemonsRouter = require('./pokemons');
const typesRouter = require('./types');
// Import all routers.

const router = Router();

// Set the ruters.
router.use('/pokemons', pokemonsRouter);
router.use('/types', typesRouter);

module.exports = router;
