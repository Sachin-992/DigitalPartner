import { MessageCircle, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 lg:col-span-1"
          >
            <a href="#" className="text-3xl font-bold font-display tracking-tight text-white mb-6 block hover:text-brand-400 transition-colors">
              Digital<span className="text-brand-500">Partner</span>
            </a>
            <p className="text-sm leading-relaxed mb-8 text-slate-400">
              We build simple, modern websites and apps that help businesses grow online.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/grow.with.sachin9/' },
                { icon: Youtube, href: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass-dark flex items-center justify-center border border-white/10 hover:border-brand-500/50 hover:bg-brand-500/20 hover:text-brand-400 hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#services" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block transform duration-300">Websites</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block transform duration-300">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block transform duration-300">Online Stores</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block transform duration-300">Custom Software</a></li>
              <li><a href="#portfolio" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block transform duration-300">Our Work</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#about" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block transform duration-300">About</a></li>
              <li><a href="#portfolio" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block transform duration-300">Projects</a></li>
              <li><a href="#pricing" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block transform duration-300">Pricing</a></li>
              <li><a href="#process" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block transform duration-300">Process</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-500 shrink-0" />
                <span className="leading-relaxed">Echampatti Village, Rayakottai, Tamil Nadu 635116</span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 mr-3 text-brand-500 shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <a href="tel:+918610964049" className="hover:text-brand-400 transition-colors font-medium tracking-wider">+91 86109 64049</a>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 mr-3 text-brand-500 shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <a href="mailto:sachinswork9@gmail.com" className="hover:text-brand-400 transition-colors font-medium">sachinswork9@gmail.com</a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/918610964049?text=Hi Sachin! I'm interested in discussing a project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] group"
                >
                  <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Start Project Chat
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm font-medium">© {new Date().getFullYear()} Sachin. All rights reserved.</p>
          <div className="flex gap-4 text-sm font-medium">
            <a href="#privacy" className="hover:text-brand-400 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-brand-400 transition-colors">Terms</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
