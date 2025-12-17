const express = require("express");
const Equipment = require("../models/Equipment");

const router = express.Router();

// GET all equipment
router.get("/", async (req, res) => {
  const equipment = await Equipment.find();
  res.json(equipment);
});

// ADD equipment
router.post("/", async (req, res) => {
    const equipment = new Equipment({
      name: req.body.name,
      type: req.body.type,
      status: req.body.status,
      last_cleaned_date: req.body.last_cleaned_date || null,
    });
  
    await equipment.save();
    res.status(201).json(equipment);
  });
  

// UPDATE equipment
router.put("/:id", async (req, res) => {
    const updated = await Equipment.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        type: req.body.type,
        status: req.body.status,
        last_cleaned_date: req.body.last_cleaned_date || null,
      },
      { new: true }
    );
  
    res.json(updated);
  });
  
  

// DELETE equipment
router.delete("/:id", async (req, res) => {
  await Equipment.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
