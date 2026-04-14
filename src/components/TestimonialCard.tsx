import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
  delay?: number;
}

export default function TestimonialCard({ content, author, role, avatar, delay = 0 }: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/10 card-hover relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 dark:text-slate-800 transition-colors group-hover:text-brand-100 dark:group-hover:text-brand-900/50 z-0" />

      <p className="text-slate-600 dark:text-slate-300 italic mb-8 relative z-10 leading-relaxed font-medium">"{content}"</p>

      <div className="flex items-center relative z-10">
        <div className="relative w-14 h-14 mr-4 shrink-0 rounded-full p-[2px] bg-gradient-to-tr from-brand-400 to-brand-600">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
            <motion.img
              style={{ y }}
              src={avatar}
              alt={author}
              loading="lazy"
              className="w-full h-full object-cover scale-125"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-brand-500 transition-colors">{author}</h4>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
