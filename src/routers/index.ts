import { Router } from "express";
import phonesRouter from "./phonesRouter";
import rechargesRouter from "./rechargesRouter";
import summaryRouter from "./summaryRouter";

const router = Router();

router.use("/phones", phonesRouter);
router.use("/recharges", rechargesRouter);
router.use("/summary", summaryRouter);

export default router;
