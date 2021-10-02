const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const ListSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    movieId: [
      {
        type: ObjectId,
        ref: "Movie",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("List", ListSchema);
