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

export const metadata: Metadata = {
    title: "PMC W24",
    description: "4주 동안 프로덕트 만들고 런칭하는 레이스",
    openGraph: {
        title: "PMC W24",
        description: "4주 동안 프로덕트 만들고 런칭하는 레이스",
        images: [
            {
                url: "/large-bg.png", // public 폴더 내의 이미지 경로
                width: 1200,
                height: 630,
                alt: "PMC W24",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "PMC W24",
        description: "4주 동안 프로덕트 만들고 런칭하는 레이스",
        images: ["/og-image.png"], // Twitter도 같은 이미지 사용
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={neodunggeunmo.className}>
            <body>{children}</body>
        </html>
    );
}
