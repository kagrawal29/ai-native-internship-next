import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./styles.css";

export const metadata: Metadata = {
  title: "AI Native Bootcamp Program",
  description:
    "Build real AI workflows, products, and agents with the AI Native Bootcamp founding cohort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}        <script async src="https://tally.so/widgets/embed.js"></script>
      </body>
    </html>
  );
}
