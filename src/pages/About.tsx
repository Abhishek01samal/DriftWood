import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Quote } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarqueeText from '@/components/MarqueeText';

import aboutHero from '@/assets/about-hero.jpg';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import driftwoodCraft from '@/assets/driftwood-craft.jpg';

const values = [
  {
    number: '01',
    title: 'Sustainability',
    description: 'Every piece we create uses only naturally fallen or ocean-tumbled wood. We never harm living trees.',
  },
  {
    number: '02',
    title: 'Authenticity',
    description: 'We honor the unique character of each piece, embracing imperfections as marks of beauty.',
  },
  {
    number: '03',
    title: 'Craftsmanship',
    description: 'Traditional techniques passed through generations, refined by modern understanding.',
  },
  {
    number: '04',
    title: 'Story',
    description: 'Each creation carries the history of its journey—shaped by tides, time, and human hands.',
  },
];

const team = [
  {
    name: 'Marcus Webb',
    role: 'Master Craftsman & Founder',
    image: team1,
    bio: '25 years of woodworking experience, specializing in sculptural forms.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Lead Designer',
    image: team2,
    bio: 'Former architect bringing spatial awareness to organic design.',
  },
];

const AboutPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScroll, [0, 1], [0, 200]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div ref={heroRef} className="h-screen relative overflow-hidden">
        <motion.div 
          style={{ scale: heroScale }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-background z-10" />
          <img 
            src={aboutHero} 
            alt="Coastal cliffs with driftwood" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-6"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[clamp(3rem,12vw,10rem)] font-bold uppercase leading-[0.85] text-primary-foreground"
          >
            BORN FROM
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[clamp(3rem,12vw,10rem)] font-bold uppercase leading-[0.85] text-primary-foreground/30"
          >
            THE SEA
          </motion.h1>
        </motion.div>

        {/* Scroll indicator line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="absolute bottom-0 left-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-accent origin-top"
        />
      </div>

      {/* Story Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <StoryImage />
            <StoryContent />
          </div>
        </div>
      </section>

      <MarqueeText text="NATURE'S FORGOTTEN TREASURES" reverse />

      {/* Values Section */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              What Guides Us
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {values.map((value, index) => (
              <ValueCard key={value.number} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet The Makers
            </span>
            <h2 className="display-large">
              Our<br />
              <span className="text-foreground/30">Team</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote size={60} className="text-accent mx-auto mb-8" />
            <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-8">
              "Every piece of driftwood has traveled farther than most of us ever will. 
              Our job is simply to reveal the beauty it has gathered along the way."
            </blockquote>
            <cite className="text-muted-foreground not-italic">
              — Marcus Webb, Founder
            </cite>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-large mb-6">Want to Visit Our Studio?</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-10">
              We welcome visitors to see our craft in action. Schedule a tour today.
            </p>
            <Link to="/contact">
              <motion.span 
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
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

const StoryImage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <motion.div style={{ y }} className="relative">
        <div className="aspect-[3/4] overflow-hidden">
          <img 
            src={driftwoodCraft} 
            alt="Artisan at work" 
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute -bottom-8 -right-8 bg-accent p-8 text-accent-foreground"
        >
          <span className="text-6xl font-bold block">12</span>
          <span className="text-sm uppercase tracking-wider">Years of Craft</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const StoryContent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-sm uppercase tracking-[0.3em] text-accent mb-6 block">
        The Beginning
      </span>
      <h2 className="display-large mb-8">
        A Journey of<br />
        <span className="text-foreground/30">Discovery</span>
      </h2>
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          It began with a single piece of sun-bleached oak, found on a remote beach 
          in Northern California. What started as a personal curiosity became an 
          obsession with the stories wood carries across oceans.
        </p>
        <p>
          Today, Driftwood Studio spans a 5,000 sq ft coastal workshop where our 
          team of artisans transforms ocean-weathered timber into museum-quality 
          sculptures, bespoke furniture, and architectural installations.
        </p>
        <p>
          We source from beaches across the Pacific Northwest, always working with 
          nature's timeline—never forcing, always listening to what each piece wants 
          to become.
        </p>
      </div>
    </motion.div>
  );
};

interface ValueCardProps {
  value: typeof values[0];
  index: number;
}

const ValueCard = ({ value, index }: ValueCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="relative group"
    >
      <motion.span 
        className="text-8xl font-bold text-primary-foreground/5 absolute -top-8 -left-4"
        whileHover={{ scale: 1.1, color: 'hsl(var(--accent) / 0.2)' }}
      >
        {value.number}
      </motion.span>
      <div className="relative pt-8">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
          {value.title}
        </h3>
        <p className="text-primary-foreground/70 leading-relaxed">
          {value.description}
        </p>
        <motion.div
          className="h-[2px] bg-accent mt-6"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
          style={{ originX: 0 }}
        />
      </div>
    </motion.div>
  );
};

interface TeamCardProps {
  member: typeof team[0];
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, rotate: index % 2 === 0 ? -3 : 3 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group"
    >
      <div className="relative overflow-hidden aspect-[3/4] mb-6">
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6"
        >
          <p className="text-primary-foreground/80">{member.bio}</p>
        </motion.div>
      </div>
      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
        {member.name}
      </h3>
      <p className="text-muted-foreground">{member.role}</p>
    </motion.div>
  );
};

export default AboutPage;
