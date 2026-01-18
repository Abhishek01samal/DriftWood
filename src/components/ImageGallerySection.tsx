import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import galleryInterior from '@/assets/gallery-interior-1.jpg';
import galleryDetail from '@/assets/gallery-detail-1.jpg';
import collectionLighting from '@/assets/collection-lighting.jpg';
import collectionFurniture from '@/assets/collection-furniture.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';

const images = [
  { src: galleryInterior, title: 'Living Room Installation', category: 'Interior' },
  { src: galleryDetail, title: 'Organic Textures', category: 'Detail' },
  { src: collectionLighting, title: 'Branch Chandelier', category: 'Lighting' },
  { src: collectionFurniture, title: 'Natural Edge Table', category: 'Furniture' },
  { src: gallery1, title: 'Sculptural Form', category: 'Art' },
  { src: gallery2, title: 'Light & Shadow', category: 'Installation' },
];

const ImageGallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const nextImage = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  const prevImage = () => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));

  return (
    <>
      <section ref={sectionRef} className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              Visual Journey
            </span>
            <h2 className="display-large">
              Gallery<br />
              <span className="text-foreground/30">Highlights</span>
            </h2>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
              <GalleryItem
                key={image.title}
                image={image}
                index={index}
                onClick={() => openLightbox(index)}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-primary/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-8 right-8 text-primary-foreground hover:text-accent transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

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
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl w-full mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="text-primary-foreground mt-6 text-center">
              <span className="text-accent text-sm uppercase tracking-wider">
                {images[selectedIndex].category}
              </span>
              <h3 className="text-2xl font-bold mt-2">{images[selectedIndex].title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

interface GalleryItemProps {
  image: typeof images[0];
  index: number;
  onClick: () => void;
  isInView: boolean;
}

const GalleryItem = ({ image, index, onClick, isInView }: GalleryItemProps) => {
  // Create varied heights for masonry effect
  const heights = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-square', 'aspect-[4/5]'];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={`${heights[index]} relative overflow-hidden cursor-pointer group ${
        index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : ''
      }`}
      onClick={onClick}
    >
      <motion.img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover transition-transform duration-700"
        whileHover={{ scale: 1.1 }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6"
      >
        <span className="text-accent text-xs uppercase tracking-wider">
          {image.category}
        </span>
        <h3 className="text-primary-foreground text-xl font-bold mt-1">
          {image.title}
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default ImageGallerySection;
