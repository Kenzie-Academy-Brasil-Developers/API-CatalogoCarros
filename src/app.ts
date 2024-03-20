import "reflect-metadata";
import "express-async-errors";
import "dotenv-config";
import cors from "cors";
import express, { json } from "express";
import helmet from "helmet";
import { carRouter } from "./routers/carRouter";
import { handleErrors } from "./middlewares";

export const app = express();

app.use(cors());
app.use(helmet());
app.use(json());

app.use("/cars", carRouter);

app.use(handleErrors.execute);

