import { motion } from 'framer-motion';

export function GradientBlur() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute -z-10 top-0 right-0 w-[500px] h-[500px] bg-primary/30 blur-[100px] rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -z-10 bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full"
      />
    </>
  );
}