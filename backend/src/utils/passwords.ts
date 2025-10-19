import bcrypt from "bcryptjs";
export const verify = (plain: string, hash: string) => bcrypt.compare(plain, hash);
