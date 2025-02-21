import { motion } from 'framer-motion';
import { WorldMap } from './WorldMap';
import { MapMarker } from './MapMarker';

interface GlobalMapProps {
  inView: boolean;
}

export function GlobalMap({ inView }: GlobalMapProps) {
  const locations = [
    // East Africa
    { x: 52.5, y: 48.2, label: 'Kigali, Rwanda', isHQ: true },
    { x: 53.8, y: 45.5, label: 'Nairobi, Kenya' },
    
    // West Africa
    { x: 41.2, y: 47.1, label: 'Lagos, Nigeria' },
    { x: 39.7, y: 46.8, label: 'Accra, Ghana' },
    
    // North Africa
    { x: 48.5, y: 38.3, label: 'Cairo, Egypt' },
    { x: 42.3, y: 39.5, label: 'Casablanca, Morocco' },
    
    // Southern Africa
    { x: 51.8, y: 65.3, label: 'Johannesburg, South Africa' },
    { x: 49.5, y: 63.2, label: 'Gaborone, Botswana' },
    
    // Central Africa
    { x: 47.2, y: 51.4, label: 'Kinshasa, DR Congo' },
    { x: 45.8, y: 49.6, label: 'Douala, Cameroon' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7 }}
      className="relative aspect-[2/1] rounded-lg overflow-hidden bg-card"
    >
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="absolute inset-0">
        <WorldMap />
        {locations.map((location, index) => (
          <motion.div
            key={location.label}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <MapMarker {...location} />
          </motion.div>
        ))}
      </div>
      
      <div className="absolute bottom-4 right-4 bg-card/80 backdrop-blur-sm rounded-lg p-3">
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-2 h-2 bg-primary rounded-full relative">
            <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping" />
          </div>
          <span>African Offices</span>
        </div>
      </div>
    </motion.div>
  );
}