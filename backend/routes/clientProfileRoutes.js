const express = require("express");
const router = express.Router();
const clientProfileController = require("../controllers/clientProfileController");

// POST route to create a new client profile
router.post("/create", clientProfileController.createClientProfile);

// GET route to retrieve all client profiles
router.get("/", clientProfileController.getAllClientProfiles);

// DELETE route to delete a client profile by ID
router.delete("/:id", clientProfileController.deleteClientProfile);

module.exports = router;
