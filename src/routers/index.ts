import { Router } from "express";
import phonesRouter from "./phonesRouter";
import rechargesRouter from "./rechargesRouter";
import summaryRouter from "./summaryRouter";

const router = Router();

router.use(phonesRouter);
router.use(rechargesRouter);
router.use(summaryRouter);

export default router;
