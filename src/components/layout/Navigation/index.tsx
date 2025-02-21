import { NavLink as RouterLink } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CompanyDropdown } from './CompanyDropdown';
import { cn } from '@/lib/utils';

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <RouterLink
      to={to}
      className={({ isActive }) =>
        cn(
          'text-sm transition-colors hover:text-primary',
          isActive ? 'text-primary font-medium' : 'text-muted-foreground'
        )
      }
    >
      {children}
    </RouterLink>
  );
}

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <RouterLink to="/" className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">ThickTek</span>
        </RouterLink>
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/innovations">Innovations</NavLink>
          <CompanyDropdown />
          <RouterLink to="/contact">
            <Button>Get Started</Button>
          </RouterLink>
        </div>
      </div>
    </nav>
  );
}