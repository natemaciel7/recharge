import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { phoneSchema } from "../schemas/phoneSchema";
import {
  createPhone,
  getPhonesByDocument,
} from "../controllers/phonesController";

const phonesRouter = Router();

phonesRouter.post("/phones", validateSchema(phoneSchema), createPhone);
phonesRouter.get("/phones/:document", getPhonesByDocument);

export default phonesRouter;
