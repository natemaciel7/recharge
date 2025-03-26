import express from "express";
import cors from "cors";
import router from "./routers/index";
import { handleAppError } from "./middlewares/errorMiddleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);
app.use(handleAppError);

export default app;
