"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface AnimatedLogoProps {
  defaultWidth?: number;
  defaultHeight?: number;
}

export default function AnimatedLogo({
  defaultWidth = 34,
  defaultHeight = 34,
}: AnimatedLogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const currentPositionRef = useRef(0);
  const directionRef = useRef(1);
  const directionChangeTimeRef = useRef(Date.now());

  const handleLogoClick = useCallback(() => {
    window.open(
      "https://disquiet.io/product-marketplace?customLeaderBoardName=pmc-s24",
      "_blank"
    );
    window.open("https://disquiet.io/pmc-s24", "_blank");
  }, []);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const animate = () => {
      if (isHovered) return;

      const now = Date.now();
      if (now - directionChangeTimeRef.current >= 3000) {
        if (Math.random() < 0.5) {
          directionRef.current *= -1;
        }
        directionChangeTimeRef.current = now;
      }

      currentPositionRef.current += directionRef.current;
      const newPosition =
        50 + (currentPositionRef.current / window.innerWidth) * 100;
      logo.style.left = `${newPosition}%`;
    };

    const intervalId = setInterval(animate, 1000 / 60); // 60 FPS

    return () => {
      clearInterval(intervalId);
    };
  }, [isHovered]);

  const width = isHovered ? 48 : defaultWidth;
  const height = isHovered ? 48 : defaultHeight;

  return (
    <div
      ref={logoRef}
      className="fixed bottom-[1vh] left-1/2 -translate-x-1/2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleLogoClick}
    >
      <div
        className="relative"
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <Image
          src={isHovered ? "/surprised-aster.png" : "/blink-aster.gif"}
          alt="Aster Logo"
          layout="fill"
          objectFit="contain"
          className="absolute bottom-0"
        />
      </div>
    </div>
  );
}
