// Import Model Alumni
const Alumni = require("../models/Alumni");

// Buat class AlumniController
class AlumniController {
  // Get All Resource
  getAllAlumni(req, res) {
    Alumni.getAll()
      .then((results) => {
        if (results.length === 0) {
          res.status(200).json({ message: "Data is empty" });
        } else {
          res.status(200).json({ message: "Get All Resource", data: results });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Database error", error: err.message });
      });
  }

  // Add Resource
  addAlumni(req, res) {
    const { name, phone, address, graduation_year, status, company_name, position } = req.body;
    if (!name || !phone || !graduation_year || !status) {
      return res.status(422).json({ message: "All fields must be filled correctly" });
    }
    Alumni.add({ name, phone, address, graduation_year, status, company_name, position })
      .then((result) => {
        res.status(201).json({ message: "Resource is added successfully", data: { id: result.insertId, ...req.body } });
      })
      .catch((err) => {
        res.status(500).json({ message: "Database error", error: err.message });
      });
  }

  // Get Detail Resource
  getAlumniById(req, res) {
    const { id } = req.params;
    Alumni.getById(id)
      .then((results) => {
        if (results.length === 0) {
          res.status(404).json({ message: "Resource not found" });
        } else {
          res.status(200).json({ message: "Get Detail Resource", data: results[0] });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Database error", error: err.message });
      });
  }

  // Update Resource
  updateAlumni(req, res) {
    const { id } = req.params;
    const { name, phone, address, graduation_year, status, company_name, position } = req.body;
    Alumni.update(id, { name, phone, address, graduation_year, status, company_name, position })
      .then((result) => {
        if (result.affectedRows === 0) {
          res.status(404).json({ message: "Resource not found" });
        } else {
          res.status(200).json({ message: "Resource is updated successfully", data: req.body });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Database error", error: err.message });
      });
  }

  // Delete Resource
  deleteAlumni(req, res) {
    const { id } = req.params;
    Alumni.delete(id)
      .then((result) => {
        if (result.affectedRows === 0) {
          res.status(404).json({ message: "Resource not found" });
        } else {
          res.status(200).json({ message: "Resource is deleted successfully" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Database error", error: err.message });
      });
  }
}

// Membuat object AlumniController
const object = new AlumniController();

// Export object AlumniController
module.exports = object;
