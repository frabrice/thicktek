import { motion } from 'framer-motion';

interface MapMarkerProps {
  x: number;
  y: number;
  label: string;
  isHQ?: boolean;
}

export function MapMarker({ x, y, label, isHQ }: MapMarkerProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="relative group">
        <div className={`${isHQ ? 'w-4 h-4' : 'w-3 h-3'} bg-primary rounded-full relative`}>
          {isHQ && (
            <div className="absolute -inset-1 bg-primary/30 rounded-full animate-pulse" />
          )}
          <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping" />
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className={`bg-popover text-popover-foreground text-sm px-2 py-1 rounded whitespace-nowrap ${isHQ ? 'font-semibold' : ''}`}>
            {label}
            {isHQ && ' (HQ)'}
          </div>
        </div>
      </div>
    </motion.div>
  );
}