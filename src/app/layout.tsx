import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Inbound Triage",
  description: "AI-powered inbound triage focused on value, risk and next actions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
