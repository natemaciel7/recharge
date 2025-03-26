import { Request, Response } from "express";
import * as rechargesService from "../services/rechargeService";

export async function createRecharge(req: Request, res: Response) {
  const rechargeData = req.body;

  const newRecharge = await rechargesService.createRecharge(rechargeData);
  return res.status(201).send(newRecharge);
}
export async function getRechargesByNumber(req: Request, res: Response) {
  const { number } = req.params;

  const recharges = await rechargesService.getRechargesByNumber(number);
  return res.send(recharges);
}
