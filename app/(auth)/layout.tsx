import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="auth-layout">{children}</div>;
}