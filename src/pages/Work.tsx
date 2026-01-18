import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarqueeText from '@/components/MarqueeText';

import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import driftwoodArt from '@/assets/driftwood-art-1.jpg';
import driftwoodInterior from '@/assets/driftwood-interior.jpg';

const projects = [
  {
    id: 1,
    title: 'Tidal Embrace',
    category: 'Gallery Installation',
    year: '2024',
    image: gallery1,
    description: 'A monumental sculpture exploring the raw power of the ocean.',
  },
  {
    id: 2,
    title: 'Luminous Roots',
    category: 'Lighting Design',
    year: '2024',
    image: gallery2,
    description: 'Organic chandelier crafted from sun-bleached branches.',
  },
  {
    id: 3,
    title: 'Whispers',
    category: 'Wall Art',
    year: '2023',
    image: gallery3,
    description: 'Abstract wall composition celebrating natural forms.',
  },
  {
    id: 4,
    title: 'Zen Garden Bench',
    category: 'Furniture',
    year: '2023',
    image: gallery4,
    description: 'Sculptural seating designed for contemplation.',
  },
  {
    id: 5,
    title: 'Coastal Flow',
    category: 'Sculpture',
    year: '2023',
    image: driftwoodArt,
    description: 'Fluid forms capturing the essence of ocean currents.',
  },
  {
    id: 6,
    title: 'Natural Edge Table',
    category: 'Furniture',
    year: '2022',
    image: driftwoodInterior,
    description: 'Live-edge dining table with driftwood base.',
  },
];

const WorkPage = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const openLightbox = (project: typeof projects[0], index: number) => {
    setSelectedProject(project);
    setLightboxIndex(index);
  };

  const nextProject = () => {
    const newIndex = (lightboxIndex + 1) % projects.length;
    setLightboxIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  const prevProject = () => {
    const newIndex = (lightboxIndex - 1 + projects.length) % projects.length;
    setLightboxIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        className="h-[70vh] relative flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="text-center z-10 relative"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block"
          >
            Our Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="display-huge"
          >
            SELECTED
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="display-huge text-foreground/20"
          >
            WORKS
          </motion.h1>
        </motion.div>

        {/* Animated background shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute w-[600px] h-[600px] rounded-full border border-accent/10 -z-0"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute w-[400px] h-[400px] rounded-full border border-accent/20 -z-0"
        />
      </motion.div>

      <MarqueeText text="ARTISTRY IN WOOD" />

      {/* Projects Grid */}
      <section className="py-20 container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onClick={() => openLightbox(project, index)}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-large mb-6">Have a Project in Mind?</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-10">
              Let's collaborate to create something extraordinary for your space.
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 flex items-center justify-center"
            onClick={() => setSelectedProject(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-primary-foreground hover:text-accent transition-colors"
              whileHover={{ rotate: 90 }}
              onClick={() => setSelectedProject(null)}
            >
              <X size={32} />
            </motion.button>

            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-accent transition-colors"
              onClick={(e) => { e.stopPropagation(); prevProject(); }}
            >
              <ChevronLeft size={48} />
            </button>

            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-accent transition-colors"
              onClick={(e) => { e.stopPropagation(); nextProject(); }}
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl w-full mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[16/10] overflow-hidden mb-8">
                <motion.img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  layoutId={`project-image-${selectedProject.id}`}
                />
              </div>
              <div className="text-primary-foreground">
                <span className="text-accent text-sm uppercase tracking-wider">
                  {selectedProject.category} — {selectedProject.year}
                </span>
                <h3 className="text-4xl font-bold mt-2 mb-4">{selectedProject.title}</h3>
                <p className="text-primary-foreground/70 text-lg max-w-2xl">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, rotate: isEven ? -2 : 2 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group cursor-pointer ${isEven ? 'md:mt-20' : ''}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        {/* Image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-primary/60 flex items-end p-8"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-primary-foreground">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="text-sm uppercase tracking-wider text-accent block mb-2"
            >
              {project.category}
            </motion.span>
            <motion.h3 
              initial={{ y: 30, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="text-3xl font-bold"
            >
              {project.title}
            </motion.h3>
          </div>
        </motion.div>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-accent"
          initial={{ x: 100, y: -100 }}
          whileHover={{ x: 0, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ArrowUpRight className="absolute bottom-2 left-2 text-accent-foreground" size={24} />
        </motion.div>
      </div>

      <div className="mt-6 flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">{project.category}</p>
        </div>
        <span className="text-sm text-muted-foreground">{project.year}</span>
      </div>
    </motion.div>
  );
};

export default WorkPage;
