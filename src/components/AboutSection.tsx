import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import driftwoodCraft from '@/assets/driftwood-craft.jpg';

const stats = [
  { value: '150+', label: 'Pieces Created' },
  { value: '12', label: 'Years Experience' },
  { value: '40+', label: 'Collections' },
  { value: '8', label: 'Countries' },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={driftwoodCraft}
                  alt="Artisan crafting driftwood"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground p-8"
              >
                <span className="text-5xl font-bold">12</span>
                <p className="text-sm uppercase tracking-wider mt-2">Years of Craft</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-6 block">
              Our Story
            </span>
            
            <h2 className="display-large mb-8">
              Crafted by<br />
              <span className="text-foreground/30">Nature & Hand</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                We are artisans who see beauty in what the sea discards. Each piece of 
                driftwood carries decades of stories—shaped by currents, bleached by sun, 
                smoothed by sand.
              </p>
              <p>
                Our studio transforms these organic forms into functional art. From 
                statement sculptures to bespoke furniture, we honor the wood's natural 
                journey while adding our own chapter to its story.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 pt-12 border-t border-border"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  >
                    <span className="text-3xl md:text-4xl font-bold text-foreground">
                      {stat.value}
                    </span>
                    <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
