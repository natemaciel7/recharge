import express from "express";
import cors from "cors";
import phonesRouter from "../src/routers/phonesRouter";
import summaryRouter from "../src/routers/summaryRouter";
import rechargeRouter from "../src/routers/rechargesRouter";
const app = express();

app.use(cors());
app.use(express.json());
app.use(summaryRouter);
app.use(rechargeRouter);
app.use("/phones", phonesRouter);

export default app;
