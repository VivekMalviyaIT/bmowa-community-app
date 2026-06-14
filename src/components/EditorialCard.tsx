'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface EditorialCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function EditorialCard({ children, className = '', delay = 0, hover = true }: EditorialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={hover ? { y: -2, transition: { duration: 0.25 } } : undefined}
      className={`editorial-card rounded-3xl ${hover ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
