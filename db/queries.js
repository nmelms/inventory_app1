const pool = require("./pool");

async function getAllGames() {
  const { rows } = await pool.query("SELECT * FROM games");
  return rows;
}

async function addGame(
  title,
  releaseDate,
  description,
  studioId,
  genreId,
  platformId
) {
  const query = `
    INSERT INTO games (title, release_date, description, studio_id, genre_id, platform_id)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
  `;
  const values = [
    title,
    releaseDate,
    description,
    studioId,
    genreId,
    platformId,
  ];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

module.exports = {
  getAllGames,
  addGame,
};
