import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-950">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-500/20 blur-[120px] rounded-full mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-emerald-500/20 blur-[100px] rounded-full mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column - Text Content */}
          <div className="text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full glass-dark text-brand-400 text-sm font-semibold mb-8 border border-brand-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                <span className="w-2 h-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
                Crafting Premium Digital Experiences
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 leading-[1.05]"
            >
              Design That <br />
              <span className="heading-gradient text-glow">Converts.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light"
            >
              We build high-performance, conversion-optimized websites and applications that elevate your brand and drive actual business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="https://wa.me/918610964049?text=Hi! I want to discuss a project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 w-full sm:w-auto group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto group"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-6 md:gap-8"
            >
              {[
                "Award Winning UI",
                "Lightning Fast",
                "SEO Optimized"
              ].map((item) => (
                <div key={item} className="flex items-center text-slate-400 font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 mr-2" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - 3D Visual Concept */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[400px] lg:h-[600px] w-full hidden md:block perspective-1000"
          >
            <div className="absolute inset-0 flex items-center justify-center transform-style-3d">
              {/* Pseudo-3D Glowing Shapes */}
              <motion.div
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-64 h-64 transform-style-3d"
              >
                {/* Core Shape */}
                <div className="absolute inset-0 glass-dark rounded-3xl border-brand-500/50 shadow-[0_0_50px_rgba(34,197,94,0.3)] transform translate-z-12 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-brand-600 to-emerald-400 blur-xl opacity-50 animate-pulse"></div>
                </div>
                {/* Floating Ring 1 */}
                <div className="absolute -inset-8 border border-white/10 rounded-full transform rotate-x-45 rotate-y-45"></div>
                {/* Floating Ring 2 */}
                <div className="absolute -inset-16 border border-brand-500/20 rounded-full transform -rotate-x-45 -rotate-y-45"></div>

                {/* Floating UI Cards */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -right-12 w-48 h-24 glass-dark rounded-xl p-4 transform translate-z-24 rotate-y-12"
                >
                  <div className="w-full h-2 bg-slate-700/50 rounded-full mb-3"></div>
                  <div className="w-3/4 h-2 bg-slate-700/50 rounded-full mb-4"></div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-500/50"></div>
                    <div className="w-8 h-8 rounded-full bg-brand-400/30"></div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-8 -left-16 w-56 h-32 glass-dark rounded-xl p-4 transform translate-z-32 -rotate-y-12"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/50"></div>
                    <div>
                      <div className="w-20 h-2 bg-slate-200/80 rounded-full mb-1"></div>
                      <div className="w-12 h-2 bg-slate-400/50 rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-full h-8 bg-slate-700/30 rounded-lg"></div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
