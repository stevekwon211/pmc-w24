import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// 로컬 폰트 설정
const neodunggeunmo = localFont({
  src: "./NeoDunggeunmoPro-Regular.woff2",
  variable: "--font-neodunggeunmo", // 변수 이름 추가
});

export const metadata: Metadata = {
  title: "PMC W24",
  description: "PMC W24",
  icons: {
    icon: "/surprised-aster.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${neodunggeunmo.variable}`}>
      <body className="font-neodunggeunmo">{children}</body>
    </html>
  );
}
