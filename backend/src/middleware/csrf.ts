import type { Request, Response, NextFunction } from "express";

/** Simple double-submit CSRF using a cookie-stored JWT auth + header token */
export function requireCsrf(req: Request, res: Response, next: NextFunction) {
  const token = req.header("x-csrf-token");
  if (!token || token !== req.cookies?.csrf) {
    return res.status(403).json({ error: "csrf_required" });
  }
  next();
}
