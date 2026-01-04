import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration - Crysol Academy",
  description: "Register for IT Support Engineer training at Crysol Academy. 45 days intensive training program with industry placement guarantee.",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


