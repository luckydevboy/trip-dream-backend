import express, { Application } from "express";
import morgan from "morgan";

import { accommodationRouter } from "./routes";

const app: Application = express();

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny"));
}

app.use("/api/v1/accommodations", accommodationRouter);

export default app;
