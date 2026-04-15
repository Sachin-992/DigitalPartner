import { 
  Stethoscope, 
  ShoppingBag, 
  Utensils, 
  Scissors, 
  Camera, 
  Play, 
  Globe, 
  Smartphone, 
  User, 
  Zap, 
  ShieldCheck, 
  Clock, 
  SmartphoneIcon, 
  HeartHandshake,
  Layout,
  Store,
  Phone,
  Check,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import ServiceCard from './components/ServiceCard';
import ProjectCaseStudyCard from './components/ProjectCaseStudyCard';
import { projects } from './data/projects';
import PricingCard from './components/PricingCard';
import TestimonialCard from './components/TestimonialCard';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { motion } from 'motion/react';
import bannerImg from "./assets/images/about.jpeg";
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Who This Is For */}
        <Section 
          id="who-it-is-for"
          title="Who We Help"
          subtitle="We specialize in digital solutions tailored for small businesses and creators who need a professional presence without the high agency costs."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: 'Clinics', 
                icon: Stethoscope, 
                image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
                description: 'Professional presence for healthcare.',
                points: ['Patient Booking', 'Service Catalog', 'Clinic Location']
              },
              { 
                name: 'Retail Shops', 
                icon: Store, 
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
                description: 'Expand your local shop reach.',
                points: ['Product Display', 'WhatsApp Sales', 'Local Visibility']
              },
              { 
                name: 'Medical Stores', 
                icon: ShoppingBag, 
                image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800&auto=format&fit=crop',
                description: 'Digital catalog for pharmacies.',
                points: ['Medicine List', 'Order Requests', 'Digital Presence']
              },
              { 
                name: 'Restaurants', 
                icon: Utensils, 
                image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
                description: 'Digital dining experience.',
                points: ['Digital Menu', 'Table Booking', 'Customer Leads']
              },
              { 
                name: 'Salons & Spas', 
                icon: Scissors, 
                image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
                description: 'Bookings made easy for beauty.',
                points: ['Appointment Sync', 'Service Menu', 'Client Reviews']
              },
              { 
                name: 'Influencers', 
                icon: Camera, 
                image: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=800&auto=format&fit=crop',
                description: 'Showcase your personal brand.',
                points: ['Brand Media Kit', 'Work Portfolio', 'Social Links']
              },
              { 
                name: 'YouTubers', 
                icon: Play, 
                image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=800&auto=format&fit=crop',
                description: 'Central hub for your content.',
                points: ['Video Showcase', 'Merch Store', 'Fan Engagement']
              },
            ].map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                {/* Image Container - Reduced Size */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center shadow-lg">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{item.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center text-xs font-medium text-slate-600">
                        <Check className="w-3 h-3 text-brand-500 mr-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Services */}
        <Section 
          id="services"
          title="Our Services"
          subtitle="Everything you need to establish and grow your digital presence. We provide end-to-end solutions designed to solve your core business challenges."
          className="bg-slate-50/50 dark:bg-slate-900/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            <ServiceCard 
              title="Business Websites"
              problem="Your business is invisible online, making it hard for local customers to find you."
              solution="We build high-performance, SEO-optimized websites that serve as a 24/7 digital storefront."
              result="Increased local visibility, more inbound inquiries, and a professional brand image."
              icon={Globe}
              delay={0.1}
            />
            <ServiceCard 
              title="Mobile Apps"
              problem="Customer retention is low because you rely solely on social media or web traffic."
              solution="Custom Android & iOS apps with push notifications and seamless user experiences."
              result="Direct access to your customers, higher engagement, and improved loyalty."
              icon={Smartphone}
              delay={0.2}
            />
            <ServiceCard 
              title="E-Commerce Setup"
              problem="Managing orders manually is chaotic and you are losing sales to larger competitors."
              solution="Fully integrated online stores with automated inventory, payments, and WhatsApp ordering."
              result="Streamlined sales process, reduced manual errors, and increased revenue."
              icon={ShoppingBag}
              delay={0.3}
            />
            <ServiceCard 
              title="Custom Software"
              problem="Inefficient manual processes and fragmented tools are slowing down your operations."
              solution="Tailored web applications and dashboards designed specifically for your workflow."
              result="Automated processes, saved time, and scalable architecture for future growth."
              icon={Layout}
              delay={0.4}
            />
          </div>
        </Section>

        {/* Tech Stack Showcase */}
        <Section
          title="Our Tech Stack"
          subtitle="We build with modern, scalable, and secure technologies."
          className="bg-slate-900 text-white overflow-hidden py-24"
        >
          <div className="relative flex overflow-x-hidden group">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              className="flex whitespace-nowrap gap-16 items-center w-[200%]"
            >
              {[
                "React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "MongoDB", "Docker", "AWS",
                "ASP.NET Core", "Blazor WebAssembly", "MudBlazor", "HTML", "CSS", "JavaScript", "MongoDB", "Supabase", "REST API Development", "Git & GitHub",
                "React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "MongoDB", "Docker", "AWS",
                "ASP.NET Core", "Blazor WebAssembly", "MudBlazor", "HTML", "CSS", "JavaScript", "MongoDB", "Supabase", "REST API Development", "Git & GitHub"
              ].map((tech, idx) => (
                <div key={idx} className="flex items-center gap-3 px-8 py-4 rounded-full bg-slate-800 text-white border border-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.18)] shrink-0 hover:scale-105 hover:bg-slate-700 transition-all cursor-default">
                  <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                  <span className="text-lg font-bold text-white">{tech}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* Stats/Counters */}
        <div className="relative z-20 -mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-[0_28px_60px_rgba(15,23,42,0.12)] grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Projects Completed", value: "9", delay: 0.1 },
              { label: "Happy Clients", value: "5+", delay: 0.2 },
              { label: "Years Experience", value: "1+", delay: 0.3 },
              { label: "Client Retention", value: "95%", delay: 0.4 }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="flex flex-col gap-2"
              >
                <span className="text-4xl md:text-5xl font-display font-bold text-brand-600">{stat.value}</span>
                <span className="text-slate-600 text-sm font-semibold uppercase tracking-[0.18em]">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How We Work */}
        <Section 
          id="process"
          title="Our Simple Process"
          subtitle="From initial idea to a live digital product in 4 easy steps."
          className="pt-32"
        >
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-gradient-to-r from-brand-100 via-brand-500/50 to-brand-100 dark:from-slate-800 dark:via-brand-500/30 dark:to-slate-800 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                {
                  step: '01',
                  title: 'Discovery Call',
                  description: 'We discuss your business goals and requirements over a quick WhatsApp call.',
                  icon: Phone
                },
                {
                  step: '02',
                  title: 'Design & Plan',
                  description: 'We create a custom design and project roadmap tailored to your brand.',
                  icon: Layout
                },
                {
                  step: '03',
                  title: 'Development',
                  description: 'Our team builds your high-performance website or app with precision.',
                  icon: Zap
                },
                {
                  step: '04',
                  title: 'Launch & Grow',
                  description: 'We go live and provide ongoing support to help your business thrive.',
                  icon: Globe
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-brand-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                    <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                      <item.icon className="w-10 h-10 text-brand-500 group-hover:text-brand-600 transition-colors" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shadow-lg z-20">
                      {item.step}
                    </div>
                  </div>
                  <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-500 transition-colors">{item.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section 
          title="Why Choose Me"
          subtitle="I'm not just a service provider; I'm your dedicated digital growth partner."
          className="bg-white dark:bg-slate-950 relative overflow-hidden"
        >
          {/* Decorative Background Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-50)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.05)_0%,_transparent_70%)] opacity-40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {[
              {
                title: 'Premium Quality',
                description: 'Enterprise-grade development at a fraction of the cost. I build modern, highly-optimized applications that scale.',
                icon: Zap,
                className: 'md:col-span-3 lg:col-span-2 glass dark:glass-dark border-brand-200/50 dark:border-brand-500/20 shadow-[0_0_20px_rgba(34,197,94,0.05)]',
                iconBg: 'bg-brand-100 dark:bg-brand-500/20',
                iconColor: 'text-brand-600 dark:text-brand-400'
              },
              {
                title: 'Lightning Fast Delivery',
                description: 'I value your time. Get your MVP live in a fraction of the time a traditional agency would take, without compromising on quality.',
                icon: Clock,
                className: 'md:col-span-3 lg:col-span-2 glass dark:glass-dark border-slate-200/50 dark:border-white/5',
                iconBg: 'bg-slate-100 dark:bg-white/10',
                iconColor: 'text-slate-700 dark:text-slate-300'
              },
              {
                title: 'Modern & Responsive',
                description: 'Every application I build looks and works perfectly on all devices. Mobile-first design and flawless micro-interactions are standard.',
                icon: SmartphoneIcon,
                className: 'md:col-span-3 lg:col-span-2 glass dark:glass-dark border-accent-200/50 dark:border-accent-500/20',
                iconBg: 'bg-accent-100 dark:bg-accent-500/20',
                iconColor: 'text-accent-600 dark:text-accent-400'
              },
              {
                title: 'Custom Architecture',
                description: 'No generic templates or rigid themes. I build unique architectures and design systems that reflect your brand identity.',
                icon: Layout,
                className: 'md:col-span-3 lg:col-span-3 glass dark:glass-dark border-slate-200/50 dark:border-white/5',
                iconBg: 'bg-slate-100 dark:bg-white/10',
                iconColor: 'text-slate-700 dark:text-slate-300'
              },
              {
                title: 'Long-Term Partnership',
                description: 'I am always just a message away. From feature updates to technical scaling, I act as your dedicated engineering partner.',
                icon: HeartHandshake,
                className: 'md:col-span-6 lg:col-span-3 glass dark:glass-dark border-brand-200/50 dark:border-brand-500/20 shadow-[0_0_20px_rgba(34,197,94,0.05)]',
                iconBg: 'bg-brand-100 dark:bg-brand-500/20',
                iconColor: 'text-brand-600 dark:text-brand-400'
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className={`p-8 rounded-[2rem] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group card-hover ${item.className}`}
              >
                <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                  <item.icon className={`w-7 h-7 ${item.iconColor} group-hover:drop-shadow-md`} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-500 transition-colors">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Portfolio / Case Studies */}
        <Section 
          id="portfolio"
          title="Our Products"
          subtitle="A showcase of the high-performance digital products we have developed."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCaseStudyCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          {/* Portfolio Conversion CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-12 rounded-[3rem] bg-slate-900 text-white text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500 rounded-full blur-[100px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-500 rounded-full blur-[100px]" />
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Want to build a product like this for your business?
              </h3>
              <p className="text-slate-400 mb-10 text-lg">
                Whether you're a startup or an established business, we help you build scalable digital products that drive real revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/918610964049?text=Hi! I saw your portfolio and I want to build a product for my business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-600/20 transition-all group"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Pricing */}
        <Section 
          id="pricing"
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your business needs. No hidden costs, ever."
        >
          {/* Trust Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              <ShieldCheck className="w-4 h-4" />
              100% Satisfaction Guaranteed
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              name="Starter"
              price="₹4,999"
              description="Perfect for local shops and personal brands looking to get online fast."
              features={[
                "Single Page Modern Website",
                "Mobile Responsive Design",
                "WhatsApp Direct Integration",
                "Google Maps Business Setup",
                "Fast 3-Day Delivery",
                "Basic SEO Optimization",
                "1 Month Free Support"
              ]}
              delay={0.1}
            />
            <PricingCard 
              name="Business"
              price="₹9,999"
              description="Ideal for clinics, salons, and growing businesses needing more depth."
              isPopular
              features={[
                "Multi-page Website (up to 5)",
                "Premium Custom UI Design",
                "Dynamic Service Listings",
                "Custom Contact Forms",
                "Advanced SEO Strategy",
                "3 Months Priority Support",
                "Free Domain (1 Year)",
                "Hosting Setup Assistance"
              ]}
              delay={0.2}
            />
            <PricingCard 
              name="Premium"
              price="Custom"
              description="For complex needs like e-commerce, custom apps, or large-scale projects."
              features={[
                "Full E-commerce / Mobile App",
                "Advanced Custom Functionality",
                "Secure Payment Integration",
                "Dedicated Admin Dashboard",
                "Full Digital Growth Package",
                "1 Year Dedicated Support",
                "Priority Feature Updates",
                "Scalable Infrastructure"
              ]}
              delay={0.3}
            />
          </div>
        </Section>

        {/* Testimonials */}
        <Section 
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our partners have to say about working with us."
          className="bg-slate-50/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              content="DigitalPartner built my clinic's website in just 3 days. It's beautiful and my patients love the WhatsApp booking feature!"
              author="Dr. Sameer Khan"
              role="Owner, City Dental Clinic"
              avatar="https://picsum.photos/seed/user1/100/100"
              delay={0.1}
            />
            <TestimonialCard 
              content="I was worried about the cost, but their Starter plan was perfect for my small boutique. Professional service at a great price."
              author="Anjali Sharma"
              role="Founder, Ethnic Wear"
              avatar="https://picsum.photos/seed/user2/100/100"
              delay={0.2}
            />
            <TestimonialCard 
              content="As a YouTuber, I needed a site to show my work to brands. They delivered exactly what I wanted. Highly recommended!"
              author="Rahul Vlogs"
              role="Content Creator"
              avatar="https://picsum.photos/seed/user3/100/100"
              delay={0.3}
            />
          </div>
        </Section>

        {/* About the Founder / Trust Building */}
        <Section 
          id="about"
          title="About Me"
          subtitle="The journey from a small town to building digital solutions for the world."
          className="bg-white dark:bg-slate-950"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative max-w-md mx-auto lg:mx-0 w-full group"
            >
              {/* Glowing Background Elements */}
              <div className="absolute -inset-10 bg-gradient-to-r from-brand-500/20 to-emerald-400/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-400 to-emerald-300 rounded-[3rem] rotate-3 opacity-20 dark:opacity-40 animate-pulse" />

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.15)] bg-slate-900 p-1 group-hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src={bannerImg} 
                  alt="Founder - Software Developer & Entrepreneur" 
                  loading="lazy"
                  className="w-full h-auto rounded-[2.3rem] object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Bio Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-6 left-6 right-6 p-5 glass-dark rounded-2xl border border-white/20 shadow-xl backdrop-blur-xl"
                >
                  <p className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                    Sachin <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                  </p>
                  <p className="text-brand-400 text-xs font-bold uppercase tracking-widest">Full-Stack Developer & Founder</p>
                </motion.div>
              </div>

              {/* Social Links - Floating */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                {[
                  { icon: Globe, href: "#", color: "hover:text-blue-500 hover:border-blue-500" },
                  { icon: User, href: "#", color: "hover:text-indigo-500 hover:border-indigo-500" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (idx * 0.1) }}
                    className={`w-12 h-12 rounded-full glass dark:glass-dark flex items-center justify-center border border-white/20 text-slate-400 shadow-lg hover:scale-110 transition-all ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-[1.1]">
                  Engineering <br />
                  <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-500 bg-clip-text text-transparent">Digital Excellence</span>
                </h3>

                <div className="prose prose-slate dark:prose-invert prose-lg text-slate-600 dark:text-slate-400 max-w-none">
                  <p className="font-medium text-slate-800 dark:text-slate-200 text-xl mb-6">
                    I'm a <strong className="text-brand-600 dark:text-brand-400">.NET Software Developer</strong> and Entrepreneur dedicated to building high-performance applications.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    My journey from a small town (Rayakottai) to engineering complex digital solutions has instilled a deep passion for problem-solving. Despite my background in Mechanical Engineering from SSN College of Engineering, I found my true calling in software architecture.
                  </p>
                </div>

                <div className="p-6 my-8 glass dark:glass-dark rounded-2xl border-l-4 border-l-brand-500 italic">
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    "I believe technology should be accessible, scalable, and impactful. Whether architecting a robust backend or crafting a pixel-perfect UI, I bring engineering precision to every layer of the stack."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center">
                  <div className="w-8 h-1 bg-gradient-to-r from-brand-500 to-brand-400 mr-4 rounded-full" />
                  Educational Foundation
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start p-5 glass dark:glass-dark border border-slate-200/50 dark:border-white/5 rounded-2xl shadow-sm hover:border-brand-500/30 transition-all hover:-translate-y-1 group">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mr-4 shrink-0 group-hover:bg-brand-500 transition-colors">
                      <Globe className="w-6 h-6 text-brand-600 dark:text-brand-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white text-sm">SSN College of Engineering</h5>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">Chennai</p>
                      <p className="text-slate-400 dark:text-slate-500 text-[10px] mt-1 uppercase font-bold tracking-tighter">B.E.Mechanical Engineering</p>
                    </div>
                  </div>

                  <div className="flex items-start p-5 glass dark:glass-dark border border-slate-200/50 dark:border-white/5 rounded-2xl shadow-sm hover:border-brand-500/30 transition-all hover:-translate-y-1 group">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mr-4 shrink-0 group-hover:bg-brand-500 transition-colors">
                      <Store className="w-6 h-6 text-brand-600 dark:text-brand-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white text-sm">Govt Boys Higher Secondary School</h5>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">Rayakottai</p>
                      <p className="text-slate-400 dark:text-slate-500 text-[10px] mt-1 uppercase font-bold tracking-tighter">Schooling</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center p-6 bg-slate-900 rounded-[2rem] text-white shadow-[0_0_30px_rgba(0,0,0,0.15)] border border-white/10"
              >
                <ShieldCheck className="w-12 h-12 mr-5 shrink-0 text-brand-400 animate-pulse" />
                <div>
                  <h4 className="font-display font-bold text-xl mb-1">Verified Expertise</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Committed to delivering secure, scalable, and high-performance software solutions.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        <Section
          id="privacy"
          title="Privacy"
          subtitle="A simple summary of how we handle your information."
          className="bg-slate-50/60"
        >
          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                title: 'What we collect',
                text: 'We may collect your name, phone number, email address, and project details when you contact us.'
              },
              {
                title: 'Why we collect it',
                text: 'We use this information to reply to you, discuss your project, and provide our services.'
              },
              {
                title: 'How we use it',
                text: 'Your information is only used for communication, project work, and support. We do not sell your data.'
              },
              {
                title: 'Your control',
                text: 'If you want your contact details or messages removed, you can contact us anytime and request deletion.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="terms"
          title="Terms"
          subtitle="A simple summary of how this website and our services are used."
        >
          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                title: 'Website use',
                text: 'The content on this website is for general information about our services and projects.'
              },
              {
                title: 'Project work',
                text: 'Project scope, timelines, pricing, and delivery are confirmed separately when we start working together.'
              },
              {
                title: 'Content and images',
                text: 'The work shown in this portfolio is for showcasing our experience and should not be copied without permission.'
              },
              {
                title: 'Contact and support',
                text: 'If you contact us through WhatsApp, phone, or email, we will respond based on availability and project requirements.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>
        <CTABanner />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}






