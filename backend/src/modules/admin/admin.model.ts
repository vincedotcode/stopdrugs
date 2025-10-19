import mongoose, { Schema, InferSchemaType } from "mongoose";

const AdminSchema = new Schema({
  email: { type: String, required: true, unique: true, index: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["superadmin"], default: "superadmin" },
  lastLoginAt: { type: Date, default: null }
}, { timestamps: true });

export type AdminDoc = InferSchemaType<typeof AdminSchema> & { _id: mongoose.Types.ObjectId };
export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
