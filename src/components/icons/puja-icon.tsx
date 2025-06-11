import type { SVGProps } from 'react';

export function PujaIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 2c-2.4 0-4.5 1-5.8 2.5S4 7.8 4 10c0 2.7 2.2 5 5 5h2c2.8 0 5-2.3 5-5 .1-2.2-1.1-4.3-2.8-5.6S14.4 2 12 2z" />
      <path d="M12 15v2" />
      <path d="M8 17h8" />
      <path d="M12 17c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
    </svg>
  );
}
