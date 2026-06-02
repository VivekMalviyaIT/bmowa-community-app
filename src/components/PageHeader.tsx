'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">{title}</h1>
      {subtitle && (
        <p className="text-sm text-white/40 mt-1">{subtitle}</p>
      )}
    </motion.div>
  );
}
