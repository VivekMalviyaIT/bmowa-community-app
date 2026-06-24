import React from 'react';

export interface StatCardProps {
  /** Leading icon (emoji or SVG node). */
  icon?: React.ReactNode;
  title: string;
  value: React.ReactNode;
  subtitle?: string;
  /** 0–100; renders a progress bar when present. */
  progress?: number;
  /** Accent for value + bar. @default "maroon" */
  tone?: 'maroon' | 'garden' | 'sand' | 'info';
  /** Show a "Live" badge. @default false */
  live?: boolean;
  style?: React.CSSProperties;
}

/**
 * Community-health metric tile (Spotlight / Snapshot).
 * @startingPoint section="Data" subtitle="Metric tile with live status & progress" viewport="700x260"
 */
export function StatCard(props: StatCardProps): JSX.Element;
