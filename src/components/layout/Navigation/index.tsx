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
          'text-[13px] font-medium transition-colors duration-150 relative group',
          isActive
            ? 'text-foreground'
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
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between" style={{ height: '68px' }}>
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
    </nav>
  );
}
