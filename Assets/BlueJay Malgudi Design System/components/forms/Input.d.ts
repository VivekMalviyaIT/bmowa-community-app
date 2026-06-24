import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase tracked label rendered above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
}

/** Labelled text input with maroon focus ring. */
export function Input(props: InputProps): JSX.Element;
