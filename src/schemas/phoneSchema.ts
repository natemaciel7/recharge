import Joi from "joi";

export const phoneSchema = Joi.object({
  name: Joi.string().required(),
  document: Joi.string().length(11).required(), 
  number: Joi.string().length(11).required(),   
  description: Joi.string().required(),
  carrierId: Joi.number().integer().required()
});
