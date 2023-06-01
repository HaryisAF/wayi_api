const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    nb_posts: {
      type: Number,
    },
    average_time_per_meet: {
      type: Number,
    },
    opening_time_1: {
      type: Date,
      required: true,
    },
    closing_time_1: {
      type: Date,
      required: true,
    },
    opening_time_2: {
      type: Date,
    },
    closing_item_2: {
      type: Date,
    },
    responsable_id: {
      type: String,
    },
    is_delete: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("service", serviceSchema);