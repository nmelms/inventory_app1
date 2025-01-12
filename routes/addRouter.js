const { Router } = require("express");
const addRouter = Router();
const { addGamePost } = require("../controllers/addController");

addRouter.get("/", (req, res) => res.render("add"));
addRouter.post("/", addGamePost);

module.exports = addRouter;
