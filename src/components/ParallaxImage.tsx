import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
  overlayColor?: string;
}

const ParallaxImage = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  overlay = false,
  overlayColor = 'from-primary/60 to-transparent',
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative w-full h-[120%] -mt-[10%]">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className={`absolute inset-0 bg-gradient-to-t ${overlayColor}`} />
        )}
      </motion.div>
    </div>
  );
};

export default ParallaxImage;
