import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Lightbulb, Hammer, Sparkles, LucideIcon } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We source driftwood from coastal locations, selecting pieces with unique character and structural integrity.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Vision',
    description: 'Each piece speaks to us. We envision its potential—seeing the sculpture within, the table waiting to emerge.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Craft',
    description: 'With traditional techniques and modern precision, we shape, sand, and finish each piece by hand.',
    icon: Hammer,
  },
  {
    number: '04',
    title: 'Reveal',
    description: 'The final piece honors its origins while serving its new purpose—art that lives and breathes.',
    icon: Sparkles,
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
            How We Work
          </span>
          <h2 className="display-large">
            Our<br />
            <span className="text-foreground/30">Process</span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border origin-top hidden sm:block"
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} isEven={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  step: {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
  };
  index: number;
  isEven: boolean;
}

const ProcessStep = ({ step, index, isEven }: ProcessStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepRef, { once: true, margin: "-50px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
        isEven ? '' : 'md:direction-rtl'
      }`}
    >
      {/* Number Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
        className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent z-10 hidden sm:block"
      />

      {/* Content */}
      <div className={`pl-16 sm:pl-0 ${isEven ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.15 + 0.2, duration: 0.8 }}
        >
          <span className="text-6xl md:text-7xl font-bold text-foreground/10 block mb-4">
            {step.number}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      </div>

      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
        className={`hidden md:flex justify-center ${isEven ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`}
      >
        <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center">
          <Icon size={40} className="text-accent" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProcessSection;
