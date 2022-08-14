const { Router } = require("express");
const { Types } = require("../db");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const types = await Types.findAll();
    res.send(types);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
