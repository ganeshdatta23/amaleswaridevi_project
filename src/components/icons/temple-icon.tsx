import type { SVGProps } from 'react';

export function TempleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 20h20" />
      <path d="M4 10h16" />
      <path d="M7 10V4l5-3 5 3v6" />
      <path d="M10 10v10" />
      <path d="M14 10v10" />
      <path d="M4 20v-6" />
      <path d="M20 20v-6" />
    </svg>
  );
}
