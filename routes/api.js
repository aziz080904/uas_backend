// Import AlumniController
const AlumniController = require("../controllers/AlumniController");

// Import express
const express = require("express");

// Membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Alumni API Express");
});

// Membuat routing alumni
router.get("/alumni", AlumniController.getAllAlumni);
router.post("/alumni", AlumniController.addAlumni);
router.get("/alumni/:id", AlumniController.getAlumniById);
router.put("/alumni/:id", AlumniController.updateAlumni);
router.delete("/alumni/:id", AlumniController.deleteAlumni);

// Export router
module.exports = router;
