const { Router } = require("express");
const addRouter = Router();
const { addGamePost, fetchAllGames } = require("../controllers/addController");
// TODO: add caching here

addRouter.get("/", (req, res) => res.render("add"));
addRouter.post("/", addGamePost);

module.exports = addRouter;
