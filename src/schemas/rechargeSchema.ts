import Joi from "joi";

export const rechargeSchema = Joi.object({
  phoneNumber: Joi.string().required(),
  amount: Joi.number().positive().required(),
});

export type RechargeData = {
  phoneNumber: string;
  amount: number;
};

function validateRechargeData(req: { body: any }) {
  const { error, value } = rechargeSchema.validate(req.body);
  const data: RechargeData = value;
  return { error, data };
}
