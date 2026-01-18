import { motion } from 'framer-motion';

interface MarqueeTextProps {
  text: string;
  reverse?: boolean;
  className?: string;
}

const MarqueeText = ({ text, reverse = false, className = '' }: MarqueeTextProps) => {
  const items = Array(4).fill(text);

  return (
    <div className={`overflow-hidden py-8 ${className}`}>
      <motion.div
        className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="display-large text-foreground/5 mx-8"
          >
            {item}
            <span className="mx-8 text-accent/10">•</span>
          </span>
        ))}
        {items.map((item, index) => (
          <span
            key={`dup-${index}`}
            className="display-large text-foreground/5 mx-8"
          >
            {item}
            <span className="mx-8 text-accent/10">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
