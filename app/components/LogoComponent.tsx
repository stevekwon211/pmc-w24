"use client";

import Image from "next/image";
import styles from "../page.module.css";

interface LogoComponentProps {
    width?: number;
    height?: number;
}

export default function LogoComponent({ width = 64, height = 64 }: LogoComponentProps) {
    return (
        <div className={styles.logoContainer}>
            <Image
                src="/blink-aster.gif"
                alt="Aster Logo"
                width={width}
                height={height}
                style={{
                    width: `clamp(${width * 0.75}px, 10vw, ${width}px)`,
                    height: "auto",
                }}
            />
        </div>
    );
}
