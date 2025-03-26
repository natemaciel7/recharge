import Joi from "joi";

export const rechargeSchema = Joi.object({
  phoneId: Joi.number().integer().required(),
  value: Joi.number().min(10).max(1000).required()
});
