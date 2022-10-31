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
  originalName: {
    type: String,
    required: true,
  },
  mimeType:{
    type: String,
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
});

export default model("Image", ImageSchema);
