import { Router } from "express";
import * as phonesController from "../controllers/phonesController";

const phonesRouter = Router();

phonesRouter.post("/", phonesController.createPhone);
phonesRouter.get("/:document", phonesController.getPhonesByDocument);

export default phonesRouter;
