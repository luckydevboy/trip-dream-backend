import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import { accommodationRouter } from "./routes";

const app: Application = express();

const corsOptions = {
  origin: ["http://localhost:4200"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny"));
}

app.use("/api/v1/accommodations", accommodationRouter);

export default app;
