import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
}

/** Multiline text field, matches Input styling. */
export function Textarea(props: TextareaProps): JSX.Element;
