const { Pool } = require("pg");

// Create a new pool instance
module.exports = new Pool({
  user: "nickmelms",
  host: "localhost",
  database: "inventory_db",
  password: "",
  port: 5432,
});
