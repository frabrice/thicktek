import { motion } from 'framer-motion';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactCards } from '@/components/contact/ContactCards';

export default function ContactPage() {
  return (
    <main className="pt-14">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        <ContactHero />
        <ContactCards />
      </motion.div>
    </main>
  );
}