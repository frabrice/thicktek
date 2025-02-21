import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Zap, Mail, MapPin, Phone } from 'lucide-react';
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
    <footer className="border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">ThickTek</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering innovation and shaping the future of technology from the heart of Africa.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                Kigali, Rwanda
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                +250780849228
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                contact@thicktek.com
              </div>
            </div>
            <Button variant="outline" onClick={handleSchedule}>
              Schedule Consultation
            </Button>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-3">
            <FooterLinks />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ThickTek. All rights reserved.
            </div>
            <FooterSocial />
          </div>
        </div>
      </div>
    </footer>
  );
}