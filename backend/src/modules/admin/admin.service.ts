import Admin from "./admin.model.js";
import { env } from "../../config/env.js";
import { verify } from "../../utils/passwords.js";

export async function ensureSeedAdmin() {
    const exists = await Admin.findOne({ email: env.ADMIN_EMAIL }).lean();
    if (!exists) {
      await Admin.create({
        email: env.ADMIN_EMAIL,
        passwordHash: env.ADMIN_PASSWORD_HASH,
        role: "superadmin"
      });
      console.log("✅ Admin user seeded:", env.ADMIN_EMAIL);
    } else {
      console.log("ℹ️ Admin already exists:", env.ADMIN_EMAIL);
    }
  }
  
export async function authenticate(email: string, password: string) {
  const admin = await Admin.findOne({ email });
  if (!admin) return null;
  const ok = await verify(password, admin.passwordHash);
  if (!ok) return null;
  admin.lastLoginAt = new Date();
  await admin.save();
  return { email: admin.email, role: admin.role };
}
