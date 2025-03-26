import { Request, Response } from "express";
import * as phonesService from "../services/phonesService";

export async function createPhone(req: Request, res: Response) {
  const phoneData = req.body;
  const newPhone = await phonesService.createPhone(phoneData);
  return res.status(201).send(newPhone);
}

export async function getPhonesByDocument(req: Request, res: Response) {
  const { document } = req.params;
  const phones = await phonesService.getPhonesByDocument(document);
  return res.send(phones);
}
