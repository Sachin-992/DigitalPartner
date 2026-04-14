import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCaseStudyCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

export default function ProjectCaseStudyCard({ project, index }: ProjectCaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-white/10 card-hover"
    >
      {/* Image Container - Expanded & Modernized */}
      <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Dark overlay that appears on hover */}
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/70 transition-colors duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
          <div className="flex gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white rounded-full font-bold text-sm shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all"
            >
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={`#contact`}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-sm transition-all"
            >
              Case Study <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category Badge - Always visible */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-4 py-1.5 glass-dark text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 shadow-sm backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-20 bg-white dark:bg-slate-900">

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700">
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Impact Badge - Enhanced */}
        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-start gap-3 p-4 bg-brand-50 dark:bg-brand-500/10 rounded-2xl border border-brand-100 dark:border-brand-500/20 group-hover:border-brand-300 dark:group-hover:border-brand-500/40 transition-colors">
            <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">
              <span className="text-brand-700 dark:text-brand-400 font-bold block mb-0.5">Impact</span>
              {project.impact}
            </p>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}
