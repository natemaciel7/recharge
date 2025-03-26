import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { rechargeSchema } from "../schemas/rechargeSchema";
import {
  createRecharge,
  getRechargesByNumber,
} from "../controllers/rechargesController";

const rechargesRouter = Router();

rechargesRouter.post(
  "/recharges",
  validateSchema(rechargeSchema),
  createRecharge
);
rechargesRouter.get("/recharges/:number", getRechargesByNumber);

export default rechargesRouter;
