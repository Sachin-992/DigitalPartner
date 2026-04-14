import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  centered?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
  centered = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding relative overflow-hidden ${dark ? 'bg-slate-950 text-white' : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {(title || subtitle) && (
          <div className={`mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'}`}>
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight ${dark ? 'text-white' : 'text-slate-900 dark:text-white'}`}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className={`text-lg md:text-xl font-medium leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
