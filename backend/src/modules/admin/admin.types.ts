export type AdminRole = "superadmin";
export interface AdminDTO {
  email: string;
  role: AdminRole;
  lastLoginAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}
