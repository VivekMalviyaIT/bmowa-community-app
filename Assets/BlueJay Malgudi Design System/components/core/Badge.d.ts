import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "neutral" */
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'sand';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/**
 * Pill badge for categories, statuses and priorities.
 * @startingPoint section="Core" subtitle="Status & category pill badges" viewport="700x140"
 */
export function Badge(props: BadgeProps): JSX.Element;
