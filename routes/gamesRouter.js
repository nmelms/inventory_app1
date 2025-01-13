const { Router } = require("express");
const gamesRouter = Router();
const { deleteGame } = require("../controllers/gamesController");

gamesRouter.delete("/:id", deleteGame);

module.exports = gamesRouter;
