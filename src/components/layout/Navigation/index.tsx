import { useEffect, useState } from 'react';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CompanyDropdown } from './CompanyDropdown';
import { MobileNav } from './MobileNav';
import { cn } from '@/lib/utils';

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <RouterLink
      to={to}
      className={({ isActive }) =>
        cn(
          'text-[13px] font-medium transition-colors duration-150 relative group pb-0.5',
          isActive
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )
      }
    >
      {({ isActive }: { isActive: boolean }) => (
        <>
          {children}
          <span
            className={cn(
              'absolute bottom-0 left-0 h-px bg-primary transition-all duration-200',
              isActive ? 'w-full' : 'w-0 group-hover:w-full'
            )}
          />
        </>
      )}
    </RouterLink>
  );
}

export function Navigation() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/98 backdrop-blur-md border-b border-border/70 shadow-sm shadow-black/20'
          : 'bg-background/95 backdrop-blur-md border-b border-border/50'
      )}
    >
      <div className="container" style={{ height: '68px' }}>
        <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
          <RouterLink to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="ThickTek Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-[17px] tracking-tight text-foreground group-hover:text-primary transition-colors duration-150">
              ThickTek
            </span>
          </RouterLink>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/how-it-works">How It Works</NavLink>
            <NavLink to="/solutions">Solutions</NavLink>
            <NavLink to="/case-studies">Case Studies</NavLink>
            <NavLink to="/audit">Audit</NavLink>
            <CompanyDropdown />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="h-9 px-4 text-[13px] font-medium text-muted-foreground hover:text-foreground"
              onClick={() => { window.scrollTo(0, 0); navigate('/contact'); }}
            >
              Contact
            </Button>
            <Button
              size="sm"
              className="h-9 px-5 text-[13px] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-md"
              onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}
            >
              Schedule Call
            </Button>
          </div>

          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
