import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  children?: React.ReactNode;
}

/** Native select styled to match the form family. Pass <option> children. */
export function Select(props: SelectProps): JSX.Element;
