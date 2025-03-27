import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { rechargeSchema } from "../schemas/rechargeSchema";
import {
  createRecharge,
  getRechargesByNumber,
} from "../controllers/rechargesController";

const rechargesRouter = Router();

rechargesRouter.post("/", validateSchema(rechargeSchema), createRecharge);

rechargesRouter.get("/:number", getRechargesByNumber);

export default rechargesRouter;
