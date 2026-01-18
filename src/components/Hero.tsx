import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-driftwood.jpg';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section ref={containerRef} className="section-full flex flex-col relative">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background z-10" />
        <img
          src={heroImage}
          alt="Driftwood on beach"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 flex-1 flex flex-col justify-center container mx-auto px-6 lg:px-12 pt-32"
      >
        <motion.div
          className="max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="overflow-hidden">
            <span className="inline-block text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Design Studio — Est. 2024
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1 variants={itemVariants} className="display-huge text-foreground">
              DRIFT
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1 variants={itemVariants} className="display-huge text-foreground/20">
              WOOD
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-10 text-lg md:text-xl max-w-xl text-muted-foreground leading-relaxed"
          >
            We transform nature's forgotten treasures into timeless pieces of art. 
            Sculptures, furniture, and bespoke installations that tell stories of the sea.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#work"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Work
            </motion.a>
            <motion.a
              href="#about"
              className="btn-outline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
