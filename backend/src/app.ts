import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

import "./db/mongoose.js";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/error.js";
import adminRoutes from "./modules/admin/admin.routes.js";
import blogRoutes from "./modules/blog/blog.routes.js";
import { swaggerUi, swaggerSpec } from "./swagger/swagger.js";
import { ensureSeedAdmin } from "./modules/admin/admin.service.js";


const app = express();

app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(cookieParser());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("tiny"));
app.use(rateLimit({ windowMs: 60_000, max: 120 }));

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/admin", adminRoutes);
app.use("/api", blogRoutes);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);
await ensureSeedAdmin(); // <- add this line here

export default app;
