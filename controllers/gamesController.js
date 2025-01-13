const db = require("../db/queries");

exports.deleteGame = (req, res) => {
  const gameId = req.params.id;
  db.deleteGame(gameId);
  res.redirect("/");
};
