const { z } = require("zod");

const inputValidation = z.object({
  name: z
    .string({ message: "name is required" })
    .min(3)
    .max(20)
    .trim()
    .transform((value) => value.toLowerCase()),

  email: z
    .string({ message: "email is required" })
    .email({ message: "bad email format" })
    .transform((value) => value.toLowerCase()),

  phone: z
    .string({ message: "phone number is required" })
    .min(10, { message: "phone number is not complete" }),
});

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

module.exports = { inputValidation, userValidation };

// const validateName = z
//   .string({ message: "name is required" })
//   .min(3)
//   .max(20)
//   .trim()
//   .toLowerCase();

// const validateEmail = z
//   .string({ message: "email is required" })
//   .email({ message: "bad email format" })
//   .transform((value) => value.toLowerCase());

// const validatePhone = z
//   .string({ message: "phone number is required" })
//   .min(10, { message: "phone number is not complete" });

// module.exports = { validateEmail, validateName, validatePhone };
