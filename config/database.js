const mysql = require("mysql");

// Buat koneksi ke database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  });
  

// Cek koneksi
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to the database");
  }
});

module.exports = db;