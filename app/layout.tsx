import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";

// Remove or comment out these lines if they're not being used
// const geistSans = GeistSans;
// const geistMono = GeistMono;

export const metadata: Metadata = {
    title: "PMC W24",
    description: "4주 동안 프로덕트 만들고 런칭하는 레이스",
    icons: [
        { rel: "icon", url: "/blink-aster.gif", type: "image/gif" },
        { rel: "icon", url: "/blink-aster-img.png", type: "image/png" },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" className={`${GeistSans.variable} ${GeistMono.variable}`}>
            <body>{children}</body>
        </html>
    );
}
