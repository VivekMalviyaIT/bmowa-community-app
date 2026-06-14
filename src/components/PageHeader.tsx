'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 lg:mb-16"
    >
      <h1 className="font-serif text-4xl lg:text-5xl text-foreground tracking-tight leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-text-muted mt-3 font-light tracking-wide">
          {subtitle}
        </p>
      )}
      <div className="mt-6 w-12 h-[1px] bg-foreground/20" />
    </motion.div>
  );
}
