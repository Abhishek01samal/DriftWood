import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Palette, Sofa, Lamp, TreePine, Home, Sparkles, LucideIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarqueeText from '@/components/MarqueeText';

import servicesHero from '@/assets/services-hero.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const services = [
  {
    icon: Palette,
    title: 'Custom Sculptures',
    description: 'One-of-a-kind art pieces for galleries, private collections, and public spaces.',
    image: gallery1,
    features: ['Unique statement pieces', 'Gallery installations', 'Outdoor sculptures', 'Corporate art'],
  },
  {
    icon: Sofa,
    title: 'Bespoke Furniture',
    description: 'Functional art that transforms living spaces with organic elegance.',
    image: gallery4,
    features: ['Dining tables', 'Coffee tables', 'Benches & seating', 'Shelving systems'],
  },
  {
    icon: Lamp,
    title: 'Lighting Design',
    description: 'Sculptural luminaires that cast shadows as beautiful as their forms.',
    image: gallery2,
    features: ['Chandeliers', 'Floor lamps', 'Wall sconces', 'Custom fixtures'],
  },
  {
    icon: Home,
    title: 'Architectural Elements',
    description: 'Large-scale installations that define and transform interior spaces.',
    image: gallery1,
    features: ['Room dividers', 'Wall installations', 'Ceiling features', 'Structural accents'],
  },
];

const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We begin with a conversation about your vision, space, and how you want to feel in it.',
  },
  {
    step: '02',
    title: 'Material Selection',
    description: 'Together we choose pieces from our collection that speak to your project\'s spirit.',
  },
  {
    step: '03',
    title: 'Design Development',
    description: 'Detailed drawings and 3D renderings bring the concept to life before we begin.',
  },
  {
    step: '04',
    title: 'Craftsmanship',
    description: 'Our artisans dedicate weeks or months to perfecting every curve and joint.',
  },
  {
    step: '05',
    title: 'Installation',
    description: 'White-glove delivery and professional installation ensure your piece makes its debut perfectly.',
  },
];

const ServicesPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <div ref={heroRef} className="h-screen relative overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent z-10" />
          <img 
            src={servicesHero} 
            alt="Driftwood collection" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          style={{ y: heroY }}
          className="relative z-20 h-full flex flex-col justify-center container mx-auto px-6 lg:px-12"
        >
          <motion.div style={{ y: textY }}>
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-6 block"
            >
              What We Create
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-[0.85] text-primary-foreground max-w-4xl"
            >
              SERVICES
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-[0.85] text-primary-foreground/30"
            >
              & OFFERINGS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 text-xl text-primary-foreground/70 max-w-xl"
            >
              From intimate sculptures to grand architectural installations, 
              we craft pieces that transform spaces and captivate souls.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-32 hidden lg:block z-20"
        >
          <TreePine size={80} className="text-primary-foreground/20" />
        </motion.div>
      </div>

      <MarqueeText text="SCULPTURE • FURNITURE • LIGHTING • ARCHITECTURE" />

      {/* Services Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              Our Expertise
            </span>
            <h2 className="display-large">
              What We<br />
              <span className="text-foreground/30">Offer</span>
            </h2>
          </motion.div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              Our Journey Together
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold">The Commission Process</h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-12 left-0 right-0 h-[2px] bg-primary-foreground/10 origin-left hidden lg:block"
            />

            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <ProcessStep key={step.step} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
                Investment
              </span>
              <h2 className="display-large mb-8">
                Pricing<br />
                <span className="text-foreground/30">& Timeline</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Every commission is unique, and pricing reflects the scale, complexity, 
                  and materials involved in bringing your vision to life.
                </p>
                <p>
                  Typical projects range from $2,500 for smaller sculptures to $50,000+ 
                  for major installations. We're happy to discuss your budget during 
                  our initial consultation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <PriceCard 
                title="Small Sculptures" 
                range="$2,500 - $8,000" 
                timeline="4-8 weeks" 
              />
              <PriceCard 
                title="Furniture Pieces" 
                range="$5,000 - $25,000" 
                timeline="8-16 weeks" 
              />
              <PriceCard 
                title="Lighting Fixtures" 
                range="$3,500 - $15,000" 
                timeline="6-12 weeks" 
              />
              <PriceCard 
                title="Large Installations" 
                range="$25,000 - $100,000+" 
                timeline="3-12 months" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Sparkles size={60} className="text-accent mx-auto mb-8" />
            <h2 className="display-large mb-6">Ready to Begin?</h2>
            <p className="text-muted-foreground text-xl mb-10">
              Let's start a conversation about transforming your space with the 
              timeless beauty of driftwood.
            </p>
            <Link to="/contact">
              <motion.span 
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Commission
                <ArrowUpRight size={20} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    image: string;
    features: string[];
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:direction-rtl'}`}
    >
      <motion.div
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={isEven ? '' : 'lg:order-2'}
      >
        <div className="relative overflow-hidden aspect-[4/3] group">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8"
          >
            <ul className="text-primary-foreground space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? 100 : -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={isEven ? '' : 'lg:order-1'}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6"
        >
          <Icon size={28} className="text-accent-foreground" />
        </motion.div>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          {service.description}
        </p>
        <motion.div
          className="h-[2px] bg-accent w-24"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ originX: 0 }}
        />
      </motion.div>
    </motion.div>
  );
};

interface ProcessStepProps {
  step: typeof process[0];
  index: number;
}

const ProcessStep = ({ step, index }: ProcessStepProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="relative text-center lg:text-left"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
        className="w-24 h-24 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto lg:mx-0 mb-6 relative"
      >
        <span className="text-2xl font-bold text-accent">{step.step}</span>
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-accent"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        />
      </motion.div>
      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
      <p className="text-primary-foreground/60 text-sm leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
};

interface PriceCardProps {
  title: string;
  range: string;
  timeline: string;
}

const PriceCard = ({ title, range, timeline }: PriceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 border border-border bg-card overflow-hidden group cursor-pointer"
      whileHover={{ x: 10 }}
    >
      <motion.div
        className="absolute inset-0 bg-accent"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? 0 : '-100%' }}
        transition={{ duration: 0.4 }}
      />
      <div className="relative z-10 flex justify-between items-center">
        <div>
          <h4 className={`font-semibold text-lg transition-colors ${isHovered ? 'text-accent-foreground' : ''}`}>
            {title}
          </h4>
          <p className={`text-sm transition-colors ${isHovered ? 'text-accent-foreground/70' : 'text-muted-foreground'}`}>
            {timeline}
          </p>
        </div>
        <span className={`text-xl font-bold transition-colors ${isHovered ? 'text-accent-foreground' : 'text-accent'}`}>
          {range}
        </span>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
