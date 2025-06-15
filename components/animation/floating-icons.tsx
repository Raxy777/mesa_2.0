"use client";

import { motion } from 'framer-motion';
import { Award, Book, Cloud, Code, Cpu, Database, GitBranch, Layers, LayoutDashboard, LifeBuoy, MessageSquare, Monitor, Package, Palette, Server, Settings, ShieldCheck, Smartphone, Tablet, TrendingUp, Users, Wind, Zap } from 'lucide-react';

const ICONS = [
  Code, Palette, Zap, Layers, Users, TrendingUp, ShieldCheck, LifeBuoy, GitBranch, Server, Cloud, Award, Cpu, Database, Smartphone, Tablet, Monitor, Wind, Settings, Package, LayoutDashboard, MessageSquare, Book
];

const FloatingIcons = () => {
  return (
    <>
      {ICONS.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-400/50 pointer-events-none"
          initial={{ opacity: 0, scale: 0.5, rotate: Math.random() * 360 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: Math.random() * 2,
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%) scale(${0.5 + Math.random() * 0.5})`,
          }}
        >
          <Icon size={10 + Math.random() * 20} />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingIcons;
