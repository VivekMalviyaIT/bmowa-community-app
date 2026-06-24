import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface treatment. @default "plain" */
  tone?: 'plain' | 'maroon' | 'garden' | 'sand' | 'glow';
  /** Lift + deepen shadow on hover. @default false */
  hover?: boolean;
  /** CSS padding value. @default "var(--space-8)" */
  padding?: string;
  children?: React.ReactNode;
}

/**
 * Editorial surface card — the primary container across BlueJay Malgudi.
 * @startingPoint section="Core" subtitle="Editorial surface card with tone washes" viewport="700x240"
 */
export function Card(props: CardProps): JSX.Element;
