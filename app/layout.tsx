import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// 로컬 폰트 설정
const neodunggeunmo = localFont({
    src: [
        {
            path: "../public/fonts/NeoDunggeunmoPro-Regular.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={neodunggeunmo.className}>
            <body>{children}</body>
        </html>
    );
}
