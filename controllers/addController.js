const db = require("../db/queries");

exports.addGamePost = async (req, res) => {
  try {
    let res = await db.addGame(req.body.title);
    console.log("game added:", res);
  } catch (err) {
    console.log(err);
  }
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
