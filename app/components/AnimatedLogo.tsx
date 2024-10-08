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
    const [isInteracting, setIsInteracting] = useState(false);
    const currentPositionRef = useRef(0);
    const directionRef = useRef(1);
    const directionChangeTimeRef = useRef(Date.now());
    const animationFrameIdRef = useRef<number | null>(null);

    const handleLogoClick = useCallback(() => {
        window.open("https://disquiet.io/pmc-s24", "_blank");
        window.open("https://disquiet.io/product-marketplace?customLeaderBoardName=pmc-s24", "_blank");
    }, []);

    const animate = useCallback(() => {
        if (isInteracting) {
            animationFrameIdRef.current = requestAnimationFrame(animate);
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
        if (logoRef.current) {
            logoRef.current.style.transform = `translateX(calc(-50% + ${currentPositionRef.current}px))`;
        }

        animationFrameIdRef.current = requestAnimationFrame(animate);
    }, [isInteracting]);

    useEffect(() => {
        animate();
        return () => {
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, [animate]);

    const handleInteractionStart = useCallback(() => setIsInteracting(true), []);
    const handleInteractionEnd = useCallback(() => setIsInteracting(false), []);

    const width = isInteracting ? 48 : defaultWidth;
    const height = isInteracting ? 48 : defaultHeight;

    return (
        <div
            ref={logoRef}
            className={styles.logoContainer}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            onClick={handleLogoClick}
            style={{
                position: "fixed",
                bottom: "1vh",
                left: "50%",
                transform: `translateX(-50%)`,
                cursor: "pointer",
                willChange: "transform",
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: `${width}px`,
                    height: `${height}px`,
                    // no transition
                    transition: "none",
                }}
            >
                <Image
                    src={isInteracting ? "/surprised-aster.png" : "/blink-aster.gif"}
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
