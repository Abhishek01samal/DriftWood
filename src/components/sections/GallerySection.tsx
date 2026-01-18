import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

import galleryInterior from '@/assets/gallery-interior-1.jpg';
import galleryDetail from '@/assets/gallery-detail-1.jpg';
import collectionLighting from '@/assets/collection-lighting.jpg';
import collectionFurniture from '@/assets/collection-furniture.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import driftwoodArt from '@/assets/driftwood-art-1.jpg';
import driftwoodInterior from '@/assets/driftwood-interior.jpg';

const categories = ['All', 'Sculpture', 'Furniture', 'Lighting', 'Installation'];

const galleryItems = [
  { id: 1, src: galleryInterior, title: 'Coastal Harmony', category: 'Installation', year: '2024' },
  { id: 2, src: galleryDetail, title: 'Organic Flow', category: 'Sculpture', year: '2024' },
  { id: 3, src: collectionLighting, title: 'Branching Light', category: 'Lighting', year: '2024' },
  { id: 4, src: collectionFurniture, title: 'Rooted Table', category: 'Furniture', year: '2023' },
  { id: 5, src: gallery1, title: 'Tidal Memory', category: 'Sculpture', year: '2023' },
  { id: 6, src: gallery2, title: 'Dawn Glow', category: 'Lighting', year: '2023' },
  { id: 7, src: gallery3, title: 'Whispered Stories', category: 'Installation', year: '2022' },
  { id: 8, src: gallery4, title: 'Zen Meditation', category: 'Furniture', year: '2022' },
  { id: 9, src: driftwoodArt, title: 'Ocean Dance', category: 'Sculpture', year: '2022' },
  { id: 10, src: driftwoodInterior, title: 'Living Edge', category: 'Furniture', year: '2021' },
];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const currentIndex = selectedImage ? galleryItems.findIndex(i => i.id === selectedImage.id) : -1;

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[newIndex]);
  };

  return (
    <section id="gallery" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
            Explore Our Work
          </span>
          <h2 className="display-large">
            Gallery
          </h2>
        </ScrollReveal>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Filter size={20} className="text-accent" />
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-all ${
                selectedCategory === category 
                  ? 'bg-accent text-accent-foreground' 
                  : 'bg-secondary hover:bg-accent/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <GalleryCard 
                key={item.id} 
                item={item} 
                index={index}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 py-16 bg-primary text-primary-foreground">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '200+', label: 'Pieces Created' },
              { value: '50+', label: 'Exhibitions' },
              { value: '15', label: 'Countries' },
              { value: '12', label: 'Years' },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <span className="text-4xl md:text-5xl font-bold text-accent block mb-2">
                  {stat.value}
                </span>
                <span className="text-sm uppercase tracking-wider text-primary-foreground/60">
                  {stat.label}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-primary-foreground hover:text-accent transition-colors"
              whileHover={{ rotate: 90 }}
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>

            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-accent transition-colors"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={48} />
            </button>

            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-accent transition-colors"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-5xl w-full mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[75vh] object-contain"
              />
              <div className="text-primary-foreground mt-6 text-center">
                <span className="text-accent text-sm uppercase tracking-wider">
                  {selectedImage.category} — {selectedImage.year}
                </span>
                <h3 className="text-3xl font-bold mt-2">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface GalleryCardProps {
  item: typeof galleryItems[0];
  index: number;
  onClick: () => void;
}

const GalleryCard = ({ item, index, onClick }: GalleryCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <motion.img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6"
        >
          <span className="text-accent text-xs uppercase tracking-wider">
            {item.category}
          </span>
          <h3 className="text-primary-foreground text-xl font-bold mt-1">
            {item.title}
          </h3>
        </motion.div>
        <motion.div
          className="absolute top-4 right-4 w-10 h-10 bg-accent flex items-center justify-center"
          initial={{ x: 50, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
        >
          <ArrowUpRight className="text-accent-foreground" size={20} />
        </motion.div>
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h4 className="font-semibold group-hover:text-accent transition-colors">{item.title}</h4>
          <p className="text-muted-foreground text-sm">{item.category}</p>
        </div>
        <span className="text-sm text-muted-foreground">{item.year}</span>
      </div>
    </motion.div>
  );
};

export default GallerySection;
