import mongoose from "mongoose";
import "dotenv/config";

import app from "./app";

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection error!", err);
  });

const port = process.env.PORT as string | 3000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
