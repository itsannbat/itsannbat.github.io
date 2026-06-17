import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
