'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';

export const navLinksData = [
  { href: '/', label: 'Home', labelTe: 'హోమ్' },
  { href: '/about', label: 'About', labelTe: 'ఆలయ సమాచారం' },
  { href: '/events', label: 'Events', labelTe: 'కార్యక్రమాలు' },
  { href: '/gallery', label: 'Gallery', labelTe: 'చిత్రమాలిక' },
  { href: '/map', label: 'Directions', labelTe: 'మార్గదర్శకాలు' },
  { href: '/suggestions', label: 'Suggestions', labelTe: 'AI సూచనలు' },
  { href: '/social', label: 'Connect', labelTe: 'సోషల్ మీడియా' },
];

interface NavigationLinksProps {
  orientation?: 'horizontal' | 'vertical';
  onLinkClick?: () => void; // For closing mobile menu
}

export default function NavigationLinks({ orientation = 'horizontal', onLinkClick }: NavigationLinksProps) {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav className={cn(
      "flex items-center gap-1",
      orientation === 'horizontal' ? "flex-row space-x-1" : "flex-col space-y-2 items-start w-full"
    )}>
      {navLinksData.map((link) => (
        <Button
          key={link.href}
          variant="ghost"
          asChild
          className={cn(
            "transition-colors hover:text-primary focus-visible:text-primary focus-visible:bg-accent/50 text-sm font-medium",
            pathname === link.href ? "text-primary bg-accent/30" : "text-foreground/70",
            orientation === 'vertical' && "w-full justify-start text-base py-3 px-4"
          )}
          onClick={onLinkClick}
        >
          <Link href={link.href}>{t(link.label, link.labelTe)}</Link>
        </Button>
      ))}
    </nav>
  );
}
