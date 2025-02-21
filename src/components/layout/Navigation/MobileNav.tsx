import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="text-lg font-semibold mb-4">Navigation Menu</SheetTitle>
        <div className="flex flex-col space-y-4 py-4">
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              `px-2 py-1 text-lg ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
            }
            onClick={handleNavigate}
          >
            Solutions
          </NavLink>
          <NavLink
            to="/innovations"
            className={({ isActive }) =>
              `px-2 py-1 text-lg ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
            }
            onClick={handleNavigate}
          >
            Innovations
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-2 py-1 text-lg ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
            }
            onClick={handleNavigate}
          >
            About Us
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `px-2 py-1 text-lg ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
            }
            onClick={handleNavigate}
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-2 py-1 text-lg ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
            }
            onClick={handleNavigate}
          >
            Contact
          </NavLink>
          <div className="pt-4">
            <NavLink to="/schedule" onClick={handleNavigate}>
              <Button className="w-full">Schedule Consultation</Button>
            </NavLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}