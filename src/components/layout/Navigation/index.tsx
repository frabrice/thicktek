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
          'text-sm transition-colors duration-150',
          isActive
            ? 'text-foreground font-medium'
            : 'text-muted-foreground hover:text-foreground'
        )
      }
    >
      {children}
    </RouterLink>
  );
}

export function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background border-b border-border/60">
      <div className="container flex items-center justify-between" style={{ height: '52px' }}>
        <RouterLink to="/" className="flex items-center space-x-2.5">
          <img
            src="/logo.png"
            alt="ThickTek Logo"
            className="h-7 w-auto"
          />
          <span className="font-semibold text-base tracking-tight text-foreground">ThickTek</span>
        </RouterLink>
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/case-studies">Case Studies</NavLink>
          <NavLink to="/audit">Audit</NavLink>
          <CompanyDropdown />
          <Button
            size="sm"
            className="h-8 px-4 text-xs font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}
          >
            Schedule Call
          </Button>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}
