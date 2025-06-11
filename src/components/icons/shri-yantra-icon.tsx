
import type { SVGProps } from 'react';

export function ShriYantraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      {/* Outer Square (Bhupura) - Simplified */}
      <rect x="4" y="4" width="56" height="56" rx="2" ry="2" />
      {/* Circles (representing lotuses) - simplified */}
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="18" />
      {/* Innermost Triangles (simplified representation of the 9 interlocking triangles) */}
      {/* Upward pointing triangles */}
      <polygon points="32,12 50,42 14,42" />
      <polygon points="32,18 45,40 19,40" />
      {/* Downward pointing triangles */}
      <polygon points="32,52 14,22 50,22" />
      <polygon points="32,46 19,24 45,24" />
      {/* Bindu (central point) */}
      <circle cx="32" cy="32" r="2.5" fill="currentColor" />
    </svg>
  );
}
