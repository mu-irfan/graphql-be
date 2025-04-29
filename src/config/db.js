const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log("DB connected!.");
  } catch (error) {
    console.error("DB connection failed:", error);
    process.exit(1);
  }
};

module.exports = {
  pool,
  connectDB,
};
