import { Router } from "express";
import { login, logout, me, getAuditFeed } from "./admin.controller.js";
import { requireAdmin } from "../../middleware/auth.js";
import { requireCsrf } from "../../middleware/csrf.js";

/**
 * @swagger
 * tags: [{ name: "admin" }]
 */

/**
 * @swagger
 * /admin/auth/login:
 *   post:
 *     tags: [admin]
 *     summary: Admin login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email: { type: string, format: email }
 *               password: { type: string }
 *     responses:
 *       200: { description: ok }
 */
const r = Router();

r.post("/auth/login", login);
r.post("/auth/logout", requireAdmin, requireCsrf, logout);

r.get("/auth/me", requireAdmin, me);

/**
 * @swagger
 * /admin/audit:
 *   get:
 *     tags: [admin]
 *     security:
 *       - cookieAuth: []
 *     summary: Admin-only audit feed
 *     responses:
 *       200: { description: ok }
 */
r.get("/audit", requireAdmin, getAuditFeed);

export default r;
