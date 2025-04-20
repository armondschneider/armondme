"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LogoPopoutProps {
  text: string;
  logoSrc: string;
}

const LogoPopout: React.FC<LogoPopoutProps> = ({ text, logoSrc }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <span
      ref={textRef}
      className="inline cursor-pointer relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {text}
      <AnimatePresence>
        {hovered && (
          <motion.img
            src={logoSrc}
            alt={`${text} logo`}
            initial={{ opacity: 0, scale: 0.5, rotate: -5, x: mousePosition.x + 100, y: mousePosition.y - 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 5,
              x: mousePosition.x + 100,
              y: mousePosition.y - 10,
            }}
            exit={{ opacity: 0, scale: 0.5, rotate: -5 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="pointer-events-none w-18 h-auto rounded-2xl shadow-2xl z-50"
            style={{ position: "absolute", transformOrigin: "top left", zIndex: 999 }}
          />
        )}
      </AnimatePresence>
    </span>
  );
};

export default LogoPopout;