import { Schema, model } from "mongoose";

const ImageSchema = new Schema({
  url: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
});

export default model("Image", ImageSchema);
