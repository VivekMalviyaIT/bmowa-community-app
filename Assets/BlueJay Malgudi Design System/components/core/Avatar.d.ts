import React from 'react';

export interface AvatarProps {
  /** Photo URL. Falls back to initials when absent. */
  src?: string;
  /** Full name — initials are derived from it. */
  name?: string;
  /** Diameter in px. @default 40 */
  size?: number;
  /** Fallback tint. @default "maroon" */
  tone?: 'maroon' | 'garden' | 'sand';
  style?: React.CSSProperties;
}

/** Resident/staff avatar with serif-initial fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
