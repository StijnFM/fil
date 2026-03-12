import { isAdmin } from "@/lib/admin-auth";
import { AdminShell } from "./AdminShell";
import { LoginForm } from "./LoginForm";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin - Football is Life",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await isAdmin();

  if (!admin) {
    return <LoginForm />;
  }

  return <AdminShell>{children}</AdminShell>;
}
