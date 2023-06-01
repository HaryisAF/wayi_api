const mongoose = require("mongoose");

const structureSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    wallet_amount: {
      type: String,
    },
    is_delete: {
      type: Boolean,
    },
    super_structure_id: {
      type: String,
    },
    categories_ids: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("structure", structureSchema);