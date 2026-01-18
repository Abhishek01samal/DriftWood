import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import driftwoodArt from '@/assets/driftwood-art-1.jpg';
import driftwoodInterior from '@/assets/driftwood-interior.jpg';
import driftwoodCraft from '@/assets/driftwood-craft.jpg';

const projects = [
  {
    title: 'Coastal Sculpture',
    category: 'Art Installation',
    year: '2024',
    image: driftwoodArt,
  },
  {
    title: 'Organic Table',
    category: 'Furniture Design',
    year: '2024',
    image: driftwoodInterior,
  },
  {
    title: 'Artisan Process',
    category: 'Craftsmanship',
    year: '2024',
    image: driftwoodCraft,
  },
];

const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-20"
        >
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              Featured Work
            </span>
            <h2 className="display-large">
              Selected<br />
              <span className="text-foreground/30">Projects</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-muted-foreground max-w-md text-lg">
            Each piece begins with a story—driftwood shaped by tides, 
            weathered by time, transformed by hands.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            className="btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    year: string;
    image: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
    >
      <div className="image-reveal aspect-[4/5] mb-6 overflow-hidden bg-secondary">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            {project.category}
          </p>
        </div>
        <span className="text-sm text-muted-foreground">{project.year}</span>
      </div>

      {/* Hover line */}
      <motion.div
        className="h-[2px] bg-accent mt-4 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default WorkSection;
