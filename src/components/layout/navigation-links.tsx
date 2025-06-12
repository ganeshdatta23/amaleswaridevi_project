
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';

export const navLinksData = [
  { href: '/', label: 'Home', labelTe: 'హోమ్' },
  { href: '/about', label: 'About', labelTe: 'ఆలయ సమాచారం' },
  { href: '/pujas', label: 'Pujas', labelTe: 'పూజలు' },
  { href: '/events', label: 'Events', labelTe: 'కార్యక్రమాలు' },
  { href: '/gallery', label: 'Gallery', labelTe: 'చిత్రమాలిక' },
  { href: '/map', label: 'Directions', labelTe: 'మార్గదర్శకాలు' },
  { href: '/trust', label: 'Trust', labelTe: 'ట్రస్ట్' },
  { href: '/social', label: 'Connect', labelTe: 'సోషల్ మీడియా' },
  { href: '/donate', label: 'Donate', labelTe: 'విరాళాలు', isFuture: true },
];

interface NavigationLinksProps {
  orientation?: 'horizontal' | 'vertical';
  onLinkClick?: () => void; 
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
            "transition-colors text-sm font-medium",
            // For Navbar (dark background): text is Gold (navbar-foreground), active is Maroon text on Gold background
            "text-navbar-foreground/80 hover:text-navbar-foreground hover:bg-navbar-foreground/10 focus-visible:text-navbar-foreground focus-visible:bg-navbar-foreground/20",
            pathname === link.href ? "bg-accent/80 text-accent-foreground" : "", // Active: Gold bg, Maroon text
            orientation === 'vertical' && "w-full justify-start text-base py-3 px-4",
            link.isFuture && "opacity-60 cursor-not-allowed"
          )}
          onClick={() => {
            if (link.isFuture) return; 
            if (onLinkClick) onLinkClick();
          }}
          disabled={link.isFuture}
        >
          <Link
            href={link.isFuture ? '#' : link.href}
          >
            {t(link.label, link.labelTe)}
            {link.isFuture && <span className="text-xs ml-1">({t('Soon','త్వరలో')})</span>}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
