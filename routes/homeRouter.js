const { Router } = require("express");
const homeRouter = Router();

homeRouter.get("/", (req, res) => res.render("homepage"));

module.exports = homeRouter;
