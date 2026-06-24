import React from 'react';

export interface ProgressBarProps {
  /** 0–100 */
  value?: number;
  /** Fill gradient. @default "maroon" */
  tone?: 'maroon' | 'garden' | 'sand' | 'info';
  showLabel?: boolean;
  /** Track height in px. @default 5 */
  height?: number;
  style?: React.CSSProperties;
}

/** Thin gradient progress track. */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
