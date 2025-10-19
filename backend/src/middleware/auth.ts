import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const ADMIN_COOKIE = "sd_admin";

export function signAdmin(email: string) {
  return jwt.sign({ sub: email, role: "admin" }, env.JWT_SECRET, { expiresIn: "12h" });
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies?.[ADMIN_COOKIE];
    if (!token) return res.status(401).json({ error: "auth_required" });
    const payload = jwt.verify(token, env.JWT_SECRET) as { sub: string; role: string };
    if (payload.role !== "admin" || payload.sub !== env.ADMIN_EMAIL) {
      return res.status(403).json({ error: "forbidden" });
    }
    req.adminEmail = payload.sub;
    next();
  } catch {
    res.status(401).json({ error: "invalid_token" });
  }
}
