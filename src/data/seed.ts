import "dotenv/config";
import mongoose from "mongoose";
import fs from "fs/promises";

import { AccommodationModel } from "../models";

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);

    console.log("Connected to MongoDB");

    await AccommodationModel.collection.drop();

    const file = await fs.readFile(`${__dirname}/accommodations.json`, "utf8");
    const users = JSON.parse(file);

    await AccommodationModel.create(users);
    console.log("Database seeded with accommodations.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
}

seedDatabase();
