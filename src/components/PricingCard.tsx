import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

export default function PricingCard({ name, price, description, features, isPopular, delay = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={`relative p-8 sm:p-10 rounded-[2.5rem] flex flex-col h-full transition-all duration-500 group ${
        isPopular 
          ? 'bg-slate-900 dark:bg-slate-800 text-white shadow-[0_20px_50px_rgba(34,197,94,0.15)] scale-105 z-10 border-2 border-brand-500 glow-effect'
          : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200/50 dark:border-white/10 card-hover'
      }`}
    >
      {isPopular && (
        <>
          <div className="absolute -inset-[2px] bg-gradient-to-b from-brand-400 to-transparent rounded-[2.6rem] z-[-1] opacity-50 blur-sm"></div>
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.4)] whitespace-nowrap">
              Most Popular
            </span>
          </div>
        </>
      )}
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-2xl font-display font-black tracking-tight ${isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{name}</h3>
          {isPopular && <div className="w-3 h-3 rounded-full bg-brand-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />}
        </div>
        <p className={`text-sm leading-relaxed ${isPopular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>{description}</p>
      </div>

      <div className="mb-8 flex items-baseline gap-2">
        <span className="text-5xl lg:text-6xl font-display font-black tracking-tighter">{price}</span>
        {price !== 'Custom' && (
          <span className={`text-xs font-bold uppercase tracking-widest ${isPopular ? 'text-slate-400' : 'text-slate-400 dark:text-slate-500'}`}>
            / project
          </span>
        )}
      </div>

      <div className={`h-px w-full mb-8 ${isPopular ? 'bg-white/10' : 'bg-slate-100 dark:bg-white/10'}`} />

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-start text-sm group/item">
            <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 transition-colors ${
              isPopular ? 'bg-brand-500/20 text-brand-400' : 'bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400'
            }`}>
              <Check className="w-3.5 h-3.5" strokeWidth={3} />
            </div>
            <span className={`transition-colors font-medium ${isPopular ? 'text-slate-300 group-hover/item:text-white' : 'text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-white'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/918610964049?text=Hi! I'm interested in the ${name} plan for my business.`}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-5 rounded-full font-black text-sm uppercase tracking-widest text-center transition-all duration-300 ${
          isPopular 
            ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-[1.02] active:scale-[0.98]'
            : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]'
        }`}
      >
        Get Started
      </a>
    </motion.div>
  );
}
