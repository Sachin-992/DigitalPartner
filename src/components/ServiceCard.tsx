import { LucideIcon, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  title: string;
  problem: string;
  solution: string;
  result: string;
  icon: LucideIcon;
  delay?: number;
}

export default function ServiceCard({ 
  title, 
  problem,
  solution,
  result,
  icon: Icon, 
  delay = 0 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col p-8 sm:p-10 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/10 card-hover group relative overflow-hidden h-full"
    >
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 dark:bg-brand-500/20 blur-3xl rounded-full translate-x-32 -translate-y-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mb-8 group-hover:bg-brand-500 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="w-8 h-8 text-brand-600 dark:text-brand-400 group-hover:text-white transition-colors" />
        </div>
        
        <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors mb-6">{title}</h3>
        
        <div className="flex flex-col gap-4 mb-8 flex-grow">
          {/* Problem */}
          <div className="bg-rose-50/50 dark:bg-rose-500/5 rounded-xl p-4 border border-rose-100/50 dark:border-rose-500/10">
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block mb-1">The Problem</span>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{problem}</p>
          </div>

          {/* Solution */}
          <div className="bg-brand-50/50 dark:bg-brand-500/5 rounded-xl p-4 border border-brand-100/50 dark:border-brand-500/10 relative">
            {/* Connection line indicator */}
            <div className="absolute -top-3 left-6 w-0.5 h-3 bg-gradient-to-b from-rose-200 to-brand-200 dark:from-rose-500/20 dark:to-brand-500/20"></div>
            <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider block mb-1">Our Solution</span>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{solution}</p>
          </div>

          {/* Result */}
          <div className="bg-emerald-50/50 dark:bg-emerald-500/5 rounded-xl p-4 border border-emerald-100/50 dark:border-emerald-500/10 relative">
            <div className="absolute -top-3 left-6 w-0.5 h-3 bg-gradient-to-b from-brand-200 to-emerald-200 dark:from-brand-500/20 dark:to-emerald-500/20"></div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">The Result</span>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">{result}</p>
          </div>
        </div>
        
        <div className="mt-auto">
          <a
            href={`https://wa.me/918610964049?text=Hi! I'm interested in your ${title} service.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-600 dark:text-brand-400 font-bold text-sm group/link hover:text-brand-500 transition-colors"
          >
            Discuss this service
            <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
