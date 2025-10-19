import mongoose from "mongoose";
import { env } from "../config/env.js";

type G = typeof globalThis & { __mongoose?: Promise<typeof mongoose> };
const g = global as G;

if (!g.__mongoose) {
  g.__mongoose = mongoose.connect(env.MONGODB_URI, { maxPoolSize: 5 });
}
await g.__mongoose;
