import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
        <div className="flex flex-col space-y-3 py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-2 py-1.5 text-base ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
            }
            onClick={handleNavigate}
          >
            Home
          </NavLink>
          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              `px-2 py-1.5 text-base ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
            }
            onClick={handleNavigate}
          >
            How It Works
          </NavLink>
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              `px-2 py-1.5 text-base ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
            }
            onClick={handleNavigate}
          >
            Solutions
          </NavLink>
          <NavLink
            to="/case-studies"
            className={({ isActive }) =>
              `px-2 py-1.5 text-base ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
            }
            onClick={handleNavigate}
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/audit"
            className={({ isActive }) =>
              `px-2 py-1.5 text-base ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
            }
            onClick={handleNavigate}
          >
            Website Audit
          </NavLink>
          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground/50 uppercase tracking-wider">Company</div>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-1.5 text-base ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
            }
            onClick={handleNavigate}
          >
            About Us
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `px-4 py-1.5 text-base ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
            }
            onClick={handleNavigate}
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-1.5 text-base ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
            }
            onClick={handleNavigate}
          >
            Contact
          </NavLink>
          <div className="pt-4">
            <Button className="w-full" onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); handleNavigate(); }}>
              Schedule Consultation
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
