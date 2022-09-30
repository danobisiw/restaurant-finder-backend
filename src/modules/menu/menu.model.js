const { Schema, model } = require("mongoose");

const menuSchema = new Schema(
  {
    menuUrl: {
      type: String,
    },
    menuName: {
      type: String,
    },
    Shop: [{ type: Schema.Types.ObjectId, ref: "Shop" }],
    totalOrders: {
      type: Number,
    },
    ratings: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
