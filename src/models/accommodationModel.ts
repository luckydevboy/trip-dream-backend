import { Schema, model } from "mongoose";
import AccommodationInterface from "../interfaces/accommodationInterface";

const accommodationSchema = new Schema<AccommodationInterface>(
  {
    images: { type: [String], required: [true, "Image is required"] },
    title: { type: String, required: [true, "Title is required"] },
    coordinates: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Accommodation = model<AccommodationInterface>(
  "Accommodation",
  accommodationSchema,
);

export default Accommodation;
