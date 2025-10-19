import { Router } from "express";
import Blog from "./blog.model.js";
import { requireAdmin } from "../../middleware/auth.js";
import { requireCsrf } from "../../middleware/csrf.js";
import { z } from "zod";

/**
 * @swagger
 * tags: [{ name: "blogs" }]
 */

const createSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3).regex(/^[a-z0-9-]+$/),
  summary: z.string().optional(),
  body_md: z.string().optional(),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional()
});

const r = Router();

// Public read
r.get("/blogs", async (_req, res) => {
  const items = await Blog.find({ published: true }).sort({ createdAt: -1 }).lean();
  res.json({ items });
});

r.get("/blogs/:slug", async (req, res) => {
  const doc = await Blog.findOne({ slug: req.params.slug, published: true }).lean();
  if (!doc) return res.status(404).json({ error: "not_found" });
  res.json(doc);
});

// Admin write
r.post("/admin/blogs", requireAdmin, requireCsrf, async (req, res) => {
  const data = createSchema.parse(req.body ?? {});
  const doc = await Blog.create(data);
  res.status(201).json({ id: doc._id });
});

r.patch("/admin/blogs/:id", requireAdmin, requireCsrf, async (req, res) => {
  const data = createSchema.partial().parse(req.body ?? {});
  const doc = await Blog.findByIdAndUpdate(req.params.id, data, { new: true });
  if (!doc) return res.status(404).json({ error: "not_found" });
  res.json({ id: doc._id });
});

r.delete("/admin/blogs/:id", requireAdmin, requireCsrf, async (req, res) => {
  const ok = await Blog.findByIdAndDelete(req.params.id);
  if (!ok) return res.status(404).json({ error: "not_found" });
  res.json({ ok: true });
});

export default r;
