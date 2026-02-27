const express = require("express");
const router = express.Router();
const Service = require("../models/service");

// Getting all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Adding a new service
router.post("/", async (req, res) => {
  try {
    const { name, desc, price, category } = req.body;
    const newService = new Service({ name, desc, price, category });
    await newService.save();
    res.json(newService);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;