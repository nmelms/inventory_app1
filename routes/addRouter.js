const { Router } = require("express");
const addRouter = Router();
const { addGamePost, fetchAllGames } = require("../controllers/addController");
// TODO: add caching here

addRouter.get("/", fetchAllGames);
addRouter.post("/", addGamePost);

module.exports = addRouter;
