import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'green' | 'ghost' | 'outline';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Pill button in the BlueJay Malgudi editorial style.
 * @startingPoint section="Core" subtitle="Maroon brand button with variants" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
