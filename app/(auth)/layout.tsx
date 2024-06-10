import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to Remote office ",
  description: "remote office style guide by AKE",
};

import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="kk-vh-100">{children}</section>;
}
