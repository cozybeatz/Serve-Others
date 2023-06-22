import "./globals.css";
import { plus_jakarta, manrope } from "./fonts";
export const metadata = {
  title: "ServeOthers.com - The Worlds #1 Entrepreneur Development Community",
  description: `Welcome to the #1 Entrepreneur Development community in the world. We focus on helping entrepreneurs become truly free, financially, mentally, & physically. Not only do we teach you how to make more income than you could possibly know what to do with, but we teach you how to spread as much impact as the world could hope for. Join us in our mission of igniting a truly free world.'`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
