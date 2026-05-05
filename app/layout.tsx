import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "汪喵净护 | 宠物洗护店",
  description: "汪喵净护是一家提供犬猫洗护、美容修剪、皮毛护理和接送预约的社区宠物洗护店。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
