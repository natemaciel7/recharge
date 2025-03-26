import express from "express";
import cors from "cors";
import phonesRouter from "./routers/phonesRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/phones", phonesRouter);

export default app;
