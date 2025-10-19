import type { Request, Response } from "express";
import { signAdmin, ADMIN_COOKIE } from "../../middleware/auth.js";
import { env } from "../../config/env.js";
import { authenticate } from "./admin.service.js";

export async function login(req: Request, res: Response) {
  const { email, password } = req.body ?? {};
  const ok = await authenticate(email, password);
  if (!ok) return res.status(401).json({ error: "invalid_credentials" });

  const jwt = signAdmin(ok.email);
  const prod = process.env.VERCEL === "1";
  res.cookie("csrf", crypto.randomUUID(), { httpOnly: false, sameSite: "strict", secure: prod, path: "/" });
  res.cookie(ADMIN_COOKIE, jwt, { httpOnly: true, sameSite: "strict", secure: prod, path: "/", maxAge: 12 * 60 * 60 * 1000 });
  res.json({ ok: true, admin: ok });
}

export async function logout(_req: Request, res: Response) {
  res.clearCookie(ADMIN_COOKIE, { path: "/" });
  res.clearCookie("csrf", { path: "/" });
  res.json({ ok: true });
}

export async function me(req: Request, res: Response) {
  res.json({ email: req.adminEmail, role: "superadmin" });
}

/** Example of admin-only data visibility */
export async function getAuditFeed(_req: Request, res: Response) {
  // placeholder for admin-only secured data
  res.json({ items: [] });
}
