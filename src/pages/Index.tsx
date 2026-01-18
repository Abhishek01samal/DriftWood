import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MarqueeText from '@/components/MarqueeText';
import WorkSection from '@/components/WorkSection';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import ImageGallerySection from '@/components/ImageGallerySection';
import Footer from '@/components/Footer';
import GallerySection from '@/components/sections/GallerySection';
import CollectionsSection from '@/components/sections/CollectionsSection';
import StudioSection from '@/components/sections/StudioSection';
import JournalSection from '@/components/sections/JournalSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <MarqueeText text="CRAFTED BY NATURE" className="-mt-20 relative z-30" />
      <WorkSection />
      <MarqueeText text="SHAPED BY HAND" reverse className="bg-secondary/30" />
      <AboutSection />
      <ImageGallerySection />
      <GallerySection />
      <MarqueeText text="CURATED COLLECTIONS • TIMELESS PIECES" />
      <CollectionsSection />
      <MarqueeText text="WHERE ART MEETS CRAFTSMANSHIP" reverse />
      <StudioSection />
      <MarqueeText text="STORIES • INSIGHTS • INSPIRATION" />
      <JournalSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
