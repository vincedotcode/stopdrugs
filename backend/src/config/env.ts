import { z } from "zod";

const EnvSchema = z.object({
  MONGODB_URI: z.string().url(),
  JWT_SECRET: z.string().min(32),
  ADMIN_EMAIL: z.string().email(),
  ADMIN_PASSWORD_HASH: z.string().min(20),
  NODE_ENV: z.enum(["development","production","test"]).default("development"),
  CORS_ORIGIN: z.string().optional()
});

export const env = EnvSchema.parse({
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  ADMIN_PASSWORD_HASH: process.env.ADMIN_PASSWORD_HASH,
  NODE_ENV: process.env.NODE_ENV,
  CORS_ORIGIN: process.env.CORS_ORIGIN ?? "*"
});
