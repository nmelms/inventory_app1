const { Router } = require("express");
const homeRouter = Router();
const homeController = require("../controllers/homeController");

homeRouter.get("/", async (req, res) => {
  const games = await homeController.fetchAllGames();
  res.render("homepage", { games, subTitle: "All Gamess" });
});

module.exports = homeRouter;
