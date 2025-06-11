
import type { SVGProps } from 'react';

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) { // Kept for potential future use, though not in current list
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.33 3.43 16.79L2 22L7.32 20.61C8.72 21.33 10.34 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM16.96 15.27C16.74 15.78 15.96 16.22 15.31 16.39C14.84 16.52 14.04 16.68 12.37 15.95C10.28 14.99 8.66 12.92 8.48 12.67C8.3 12.41 7.27 11.08 7.27 9.89C7.27 8.7 7.99 8.06 8.21 7.81C8.44 7.56 8.79 7.48 9.08 7.48C9.22 7.48 9.35 7.49 9.47 7.5C9.71 7.53 9.96 7.94 10.14 8.19C10.32 8.45 10.49 8.76 10.33 9.01C10.17 9.27 10.06 9.39 9.89 9.59C9.72 9.79 9.58 9.94 9.73 10.18C9.88 10.41 10.42 11.21 11.26 11.96C12.35 12.92 13.17 13.21 13.46 13.33C13.75 13.46 13.95 13.42 14.13 13.16C14.34 12.87 14.76 12.31 15.01 12.03C15.27 11.75 15.53 11.69 15.79 11.8C16.05 11.91 17.04 12.42 17.27 12.67C17.5 12.93 17.59 13.12 17.53 13.38C17.47 13.63 17.18 14.76 16.96 15.27Z"/>
    </svg>
  );
}
