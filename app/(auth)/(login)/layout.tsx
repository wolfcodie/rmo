import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login && forgot the pass",
  description: "remote office style guide by AKE",
};

import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
