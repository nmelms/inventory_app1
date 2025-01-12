const db = require("../db/queries");

exports.addGamePost = (req, res) => {
  const games = db.getAllGames;
  console.log("add games to db");
  res.redirect("/");
};

exports.fetchAllGames = async (req, res) => {
  try {
    const games = await db.getAllGames();
    res.render("homepage", { games });
  } catch (err) {
    res.status(500).send("Error fetching games");
  }
};
