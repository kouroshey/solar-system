import type { Metadata } from "next";
import "./style/globals.css";

export const metadata: Metadata = {
  title: "منظومه شمسی"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
