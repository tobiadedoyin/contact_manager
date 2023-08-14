const { z } = require("zod");

const userValidation = z.object({
  username: z.string(),
  email: z
    .string()
    .email({ message: "invalid email format" })
    .transform((value) => value.toLowerCase()),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters long" }),
});

module.exports = userValidation;
