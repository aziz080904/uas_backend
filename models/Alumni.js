// Import database
const db = require("../config/database");

// Membuat class Alumni
class Alumni {
  static getAll() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM alumni", (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }

  static add(data) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO alumni SET ?";
      db.query(query, data, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM alumni WHERE id = ?", [id], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }

  static update(id, data) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE alumni SET ? WHERE id = ?";
      db.query(query, [data, id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM alumni WHERE id = ?", [id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
}

// Export class Alumni
module.exports = Alumni;
