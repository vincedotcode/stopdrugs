import mongoose, { Schema, InferSchemaType } from "mongoose";

const BlogSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  summary: { type: String, default: "" },
  body_md: { type: String, default: "" },
  tags: { type: [String], default: [] },
  published: { type: Boolean, default: false }
}, { timestamps: true });

export type BlogDoc = InferSchemaType<typeof BlogSchema> & { _id: mongoose.Types.ObjectId };
export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
