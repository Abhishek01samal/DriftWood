import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarqueeText from '@/components/MarqueeText';
import ScrollReveal from '@/components/ScrollReveal';
import ParallaxImage from '@/components/ParallaxImage';

import collectionExhibition from '@/assets/collection-exhibition.jpg';
import collectionLighting from '@/assets/collection-lighting.jpg';
import collectionFurniture from '@/assets/collection-furniture.jpg';
import galleryInterior from '@/assets/gallery-interior-1.jpg';
import galleryDetail from '@/assets/gallery-detail-1.jpg';
import blogCoastal from '@/assets/blog-coastal.jpg';

const collections = [
  {
    id: 1,
    title: 'Coastal Origins',
    subtitle: '2024 Collection',
    description: 'Inspired by the rugged beauty of the Pacific Northwest coastline. Each piece carries the essence of windswept shores and ancient forests meeting the sea.',
    image: blogCoastal,
    pieces: 12,
    featured: true,
  },
  {
    id: 2,
    title: 'Luminous Forms',
    subtitle: 'Lighting Collection',
    description: 'Sculptural lighting that transforms spaces with organic warmth. Chandeliers and fixtures that become art installations.',
    image: collectionLighting,
    pieces: 8,
    featured: false,
  },
  {
    id: 3,
    title: 'Living Edge',
    subtitle: 'Furniture Collection',
    description: 'Tables, benches, and seating that celebrate the natural form. Each piece preserves the organic curves carved by nature.',
    image: collectionFurniture,
    pieces: 15,
    featured: false,
  },
  {
    id: 4,
    title: 'Monumental',
    subtitle: 'Large Installations',
    description: 'Statement pieces for grand spaces. Architectural installations that redefine interiors and public spaces alike.',
    image: collectionExhibition,
    pieces: 6,
    featured: true,
  },
];

const featuredPieces = [
  { title: 'Tidal Embrace', collection: 'Coastal Origins', price: '$12,500', image: galleryDetail },
  { title: 'Branch Chandelier', collection: 'Luminous Forms', price: '$8,900', image: collectionLighting },
  { title: 'Rooted Table', collection: 'Living Edge', price: '$15,000', image: collectionFurniture },
  { title: 'Ocean Drift', collection: 'Monumental', price: '$45,000', image: galleryInterior },
];

const CollectionsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <div ref={heroRef} className="h-screen relative overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent z-10" />
          <img 
            src={collectionExhibition} 
            alt="Collections" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          style={{ y: heroY }}
          className="relative z-20 h-full flex flex-col justify-center container mx-auto px-6 lg:px-12"
        >
          <motion.span 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-6 block"
          >
            Curated Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[clamp(3rem,12vw,10rem)] font-bold uppercase leading-[0.85] text-primary-foreground max-w-5xl"
          >
            COLLECTIONS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-xl text-primary-foreground/70 max-w-xl"
          >
            Explore our curated collections, each telling a unique story of 
            nature's artistry transformed by skilled hands.
          </motion.p>
        </motion.div>
      </div>

      <MarqueeText text="COASTAL ORIGINS • LUMINOUS FORMS • LIVING EDGE • MONUMENTAL" />

      {/* Collections Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              Browse Collections
            </span>
            <h2 className="display-large">
              Our<br />
              <span className="text-foreground/30">Collections</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-32">
            {collections.map((collection, index) => (
              <CollectionCard key={collection.id} collection={collection} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pieces */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              Available Now
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold">Featured Pieces</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPieces.map((piece, index) => (
              <FeaturedPieceCard key={piece.title} piece={piece} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Teaser */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="aspect-[4/5] overflow-hidden">
                <ParallaxImage 
                  src={galleryDetail} 
                  alt="Craftsmanship detail"
                  className="h-full"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <span className="text-sm uppercase tracking-[0.3em] text-accent mb-6 block">
                The Art of Creation
              </span>
              <h2 className="display-large mb-8">
                From Ocean<br />
                <span className="text-foreground/30">to Gallery</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Every collection begins with a journey along the coast. We source 
                driftwood that has been shaped by decades of tides, then spend months 
                transforming each piece while honoring its natural character.
              </p>
              <Link to="/studio">
                <motion.span 
                  className="btn-outline inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Visit Our Studio
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="display-large mb-6">Request a Catalog</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-10">
              Receive our beautifully printed collection catalog featuring 
              detailed photography and specifications.
            </p>
            <Link to="/contact">
              <motion.span 
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Catalog
                <ArrowUpRight size={20} />
              </motion.span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface CollectionCardProps {
  collection: typeof collections[0];
  index: number;
}

const CollectionCard = ({ collection, index }: CollectionCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:direction-rtl'}`}
    >
      <motion.div
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden aspect-[4/3] group"
      >
        <motion.img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
        />
        {collection.featured && (
          <div className="absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 text-sm uppercase tracking-wider">
            Featured
          </div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-primary/60 flex items-center justify-center"
        >
          <motion.span
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
          >
            Explore Collection
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? 100 : -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={isEven ? '' : 'lg:text-right'}
      >
        <span className="text-accent text-sm uppercase tracking-wider">
          {collection.subtitle}
        </span>
        <h3 className="text-4xl md:text-5xl font-bold mt-2 mb-6">{collection.title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          {collection.description}
        </p>
        <div className="flex items-center gap-8 mb-8">
          <div>
            <span className="text-3xl font-bold text-accent">{collection.pieces}</span>
            <p className="text-sm text-muted-foreground">Pieces</p>
          </div>
        </div>
        <motion.div
          className="h-[2px] bg-accent w-24"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ originX: isEven ? 0 : 1 }}
        />
      </motion.div>
    </motion.div>
  );
};

interface FeaturedPieceCardProps {
  piece: typeof featuredPieces[0];
  index: number;
}

const FeaturedPieceCard = ({ piece, index }: FeaturedPieceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[3/4] mb-4">
        <motion.img
          src={piece.image}
          alt={piece.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-accent/80 flex items-center justify-center"
        >
          <span className="text-accent-foreground font-semibold">View Details</span>
        </motion.div>
      </div>
      <span className="text-xs uppercase tracking-wider text-primary-foreground/60">
        {piece.collection}
      </span>
      <h4 className="font-semibold text-lg group-hover:text-accent transition-colors">
        {piece.title}
      </h4>
      <span className="text-accent font-bold">{piece.price}</span>
    </motion.div>
  );
};

export default CollectionsPage;
