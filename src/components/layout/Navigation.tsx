import { useNavigate } from 'react-router-dom';
import { NavLink as RouterLink } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNav } from './Navigation/MobileNav';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
  const navigate = useNavigate();

  const handleSchedule = () => {
    window.scrollTo(0, 0);
    navigate('/schedule');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <RouterLink to="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">ThickTek</span>
          </RouterLink>
          <MobileNav />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/innovations">Innovations</NavLink>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-primary">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    <RouterLink 
                      to="/about"
                      className="block px-3 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      About Us
                    </RouterLink>
                    <RouterLink 
                      to="/careers"
                      className="block px-3 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      Careers with Us
                    </RouterLink>
                    <RouterLink 
                      to="/contact"
                      className="block px-3 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      Contact Us
                    </RouterLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button onClick={handleSchedule}>Schedule Consultation</Button>
        </div>
      </div>
    </nav>
  );
}