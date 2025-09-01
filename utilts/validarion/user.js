const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().min(3).optional(),
  email: Joi.string().email().required(),
  age: Joi.number().required(),
  bio:Joi.string().optional(),
  password:Joi.string().required(),
  role:Joi.string().required(),
});
const updateUserPutSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  age: Joi.number().required(),
  bio:Joi.string().optional(),
});

const updateUserSchema = createUserSchema.fork(["name","email", "age","bio","password"], (schema) =>
  schema.optional()
);

// const updateUserSchema= Joi.object({
//   name:Joi.string().min(3).optional(),
//   email:Joi.string().email().optional(),
//   age:Joi.number().optional()
// })

module.exports = {
  createUserSchema,
  updateUserPutSchema,
  updateUserSchema,
};
