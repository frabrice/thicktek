import { motion } from 'framer-motion';
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
    <footer className="relative border-t border-border/60 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, hsl(213, 94%, 58%) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container relative z-10">
        <div className="py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-40px' }}
            className="space-y-5"
          >
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
              <div className="flex items-center text-xs text-muted-foreground gap-2 hover:text-foreground/70 transition-colors">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                Kigali, Rwanda
              </div>
              <div className="flex items-center text-xs text-muted-foreground gap-2 hover:text-foreground/70 transition-colors">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                +250 780 849 228
              </div>
              <div className="flex items-center text-xs text-muted-foreground gap-2 hover:text-foreground/70 transition-colors">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-3"
          >
            <FooterLinks />
          </motion.div>
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
