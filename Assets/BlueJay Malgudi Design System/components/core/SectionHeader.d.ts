import React from 'react';

export interface SectionHeaderProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Show the short rule beneath. @default true */
  rule?: boolean;
  /** @default "left" */
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

/**
 * Serif page/section header with eyebrow, subtitle and signature rule.
 * @startingPoint section="Core" subtitle="Editorial page & section header" viewport="700x200"
 */
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
