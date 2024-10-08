"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import styles from "../page.module.css";

interface AnimatedLogoProps {
    defaultWidth?: number;
    defaultHeight?: number;
}

export default function AnimatedLogo({ defaultWidth = 34, defaultHeight = 34 }: AnimatedLogoProps) {
    const logoRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const currentPositionRef = useRef(0);
    const directionRef = useRef(1);
    const directionChangeTimeRef = useRef(Date.now());

    const handleLogoClick = useCallback(() => {
        window.open("https://disquiet.io/product-marketplace?customLeaderBoardName=pmc-s24", "_blank");
        window.open("https://disquiet.io/pmc-s24", "_blank");
    }, []);

    useEffect(() => {
        const logo = logoRef.current;
        if (!logo) return;

        let animationFrameId: number;

        const animate = () => {
            if (isHovered) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }

            const now = Date.now();
            if (now - directionChangeTimeRef.current >= 3000) {
                if (Math.random() < 0.5) {
                    directionRef.current *= -1;
                }
                directionChangeTimeRef.current = now;
            }

            currentPositionRef.current += directionRef.current;
            logo.style.transform = `translateX(calc(-50% + ${currentPositionRef.current}px))`;

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isHovered]);

    const width = isHovered ? 48 : defaultWidth;
    const height = isHovered ? 48 : defaultHeight;

    return (
        <div
            ref={logoRef}
            className={styles.logoContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleLogoClick}
            style={{
                position: "fixed",
                bottom: "1vh",
                left: "50%",
                transform: `translateX(calc(-50% + ${currentPositionRef.current}px))`,
                cursor: "pointer",
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: `${width}px`,
                    height: `${height}px`,
                }}
            >
                <Image
                    src={isHovered ? "/surprised-aster.png" : "/blink-aster.gif"}
                    alt="Aster Logo"
                    layout="fill"
                    objectFit="contain"
                    style={{
                        position: "absolute",
                        bottom: 0,
                    }}
                />
            </div>
        </div>
    );
}
