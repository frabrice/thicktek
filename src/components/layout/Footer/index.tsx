import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';

export function Footer() {
  const navigate = useNavigate();

  const handleSchedule = () => {
    window.scrollTo(0, 0);
    navigate('/schedule');
  };

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container">
        <div className="py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <Link to="/" className="flex items-center space-x-2.5">
              <img
                src="/logo.png"
                alt="ThickTek Logo"
                className="h-6 w-auto"
              />
              <span className="font-semibold text-base tracking-tight text-foreground">ThickTek</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building digital systems that move businesses forward — from Kigali to the world.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-xs text-muted-foreground gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                Kigali, Rwanda
              </div>
              <div className="flex items-center text-xs text-muted-foreground gap-2">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                +250 780 849 228
              </div>
              <div className="flex items-center text-xs text-muted-foreground gap-2">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                admin@thicktek.com
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSchedule}
              className="text-xs h-8 border-border/80 hover:border-primary/40 hover:text-primary transition-colors"
            >
              Schedule a Call
            </Button>
          </div>

          <div className="lg:col-span-3">
            <FooterLinks />
          </div>
        </div>

        <div className="py-5 border-t border-border/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} ThickTek. All rights reserved.
            </div>
            <FooterSocial />
          </div>
        </div>
      </div>
    </footer>
  );
}
