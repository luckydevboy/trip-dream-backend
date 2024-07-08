import express, { Application } from "express";
import morgan from "morgan";

const app: Application = express();

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny"));
}

// app.use("/api/v1/travels", travelsRoutes);

export default app;
