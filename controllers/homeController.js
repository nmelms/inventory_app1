const db = require("../db/queries");

exports.fetchAllGames = async (req, res) => {
  try {
    const games = await db.getAllGames();
    return games;
  } catch (err) {
    return res.status(500).send("Error fetching games");
  }
};
