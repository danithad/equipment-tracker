const mongoose = require("mongoose");

const EquipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  last_cleaned_date: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("Equipment", EquipmentSchema);
