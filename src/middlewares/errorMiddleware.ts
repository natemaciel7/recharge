import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Erro no middleware:", err);

  if (err.type === "conflict") {
    return res.status(409).send(err.message);
  }

  return res.status(500).send("Erro interno do servidor");
}
