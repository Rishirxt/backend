"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-px bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
