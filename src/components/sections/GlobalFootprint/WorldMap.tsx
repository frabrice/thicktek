import { motion } from 'framer-motion';

export function WorldMap() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewBox="0 0 1000 500"
      className="w-full h-full"
      fill="currentColor"
    >
      <path
        className="text-primary/10"
        d="M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-3.75l-0.83-2.92l3.33-7.93l5.39-2.08l5.39,2.08L781.68,324.4zM317.95,204.22l-6.14,25.24l19.93,23.6l18.67,11.66l0.89-4.02l-2.36-3.41l1.33-4.42l-0.67-6.7l2.23-6.48l7.6-2.68l-7.4-12.81l-10.58-11.78l-6.6-2.0l-4.02,5.26l-6.72-0.26l-2.46-3.88L317.95,204.22zM753.17,343.55l-3.75,14.61l1.25,4.58l8.33,3.75l7.08-3.75l0.83-9.98l-3.33-12.07L753.17,343.55zM781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-3.75l-0.83-2.92l3.33-7.93l5.39-2.08l5.39,2.08L781.68,324.4z"
      />
      {/* Add more path elements for other continents */}
    </motion.svg>
  );
}