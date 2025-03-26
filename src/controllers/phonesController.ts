import { Request, Response } from "express";
import * as phonesService from "../services/phonesService";

export async function createPhone(req: Request, res: Response) {
  try {
    const phoneData = req.body;
    const phone = await phonesService.createPhone(phoneData);
    return res.status(201).send(phone);
  } catch (error: any) {
    console.error("Erro capturado no controller:", error);

    if (error.type === "conflict") {
      return res.status(409).send(error.message);
    }

    if (error instanceof Error) {
      return res.status(500).send(error.message);
    }

    return res.status(500).send("Erro interno do servidor");
  }
}

export async function getPhonesByDocument(req: Request, res: Response) {
  try {
    const { document } = req.params;
    const phones = await phonesService.getPhonesByDocument(document);
    return res.send(phones);
  } catch (error: any) {
    console.error("Erro ao buscar telefones:", error);
    return res.status(500).send("Erro interno do servidor");
  }
}
