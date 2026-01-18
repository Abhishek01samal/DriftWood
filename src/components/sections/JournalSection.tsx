import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

import blogCoastal from '@/assets/blog-coastal.jpg';
import studioInterior from '@/assets/studio-interior.jpg';
import studioHands from '@/assets/studio-hands.jpg';
import collectionExhibition from '@/assets/collection-exhibition.jpg';
import galleryDetail from '@/assets/gallery-detail-1.jpg';
import collectionFurniture from '@/assets/collection-furniture.jpg';

const featuredPost = {
  title: 'The Art of Sourcing: A Journey Along the Pacific Coast',
  excerpt: 'Every piece begins with a walk along the shore. Join us as we explore the beaches of Northern California in search of the perfect driftwood.',
  image: blogCoastal,
  date: 'January 10, 2024',
  readTime: '8 min read',
  category: 'Behind the Scenes',
};

const posts = [
  {
    id: 1,
    title: 'Designing for Spaces: A Conversation with Interior Architect Sarah Chen',
    excerpt: 'How our pieces integrate into modern and traditional interiors alike.',
    image: studioInterior,
    date: 'December 28, 2023',
    readTime: '6 min read',
    category: 'Interviews',
  },
  {
    id: 2,
    title: 'The Finishing Touch: Our Approach to Preserving Natural Beauty',
    excerpt: 'The techniques we use to protect driftwood while maintaining its organic character.',
    image: studioHands,
    date: 'December 15, 2023',
    readTime: '5 min read',
    category: 'Craftsmanship',
  },
  {
    id: 3,
    title: 'Exhibition Recap: "Tides of Time" at the Monterey Art Museum',
    excerpt: 'Highlights and reflections from our largest public installation to date.',
    image: collectionExhibition,
    date: 'November 30, 2023',
    readTime: '7 min read',
    category: 'Events',
  },
];

const JournalSection = () => {
  return (
    <section id="journal" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal className="text-center mb-20">
          <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
            Stories & Insights
          </span>
          <h2 className="display-large">
            Journal
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on craftsmanship, design inspiration, and the stories 
            behind our creations.
          </p>
        </ScrollReveal>

        {/* Featured Post */}
        <ScrollReveal className="mb-20">
          <div className="group block cursor-pointer">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden aspect-[4/3]">
                <motion.img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 text-sm uppercase tracking-wider">
                  Featured
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-2">
                    <Tag size={14} className="text-accent" />
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>
                
                <motion.span 
                  className="inline-flex items-center gap-2 text-accent font-medium"
                  whileHover={{ x: 10 }}
                >
                  Read Article
                  <ArrowRight size={18} />
                </motion.span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-32 py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold mb-6">
              Stay Inspired
            </h2>
            <p className="text-primary-foreground/70 text-xl max-w-2xl mx-auto mb-10">
              Subscribe to our newsletter for monthly insights, exclusive previews, 
              and stories from the studio.
            </p>
            
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 px-6 py-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent outline-none"
              />
              <motion.button
                type="submit"
                className="bg-accent text-accent-foreground px-8 py-4 font-medium inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
                <ArrowUpRight size={18} />
              </motion.button>
            </form>
            
            <p className="text-primary-foreground/50 text-sm mt-6">
              Join 2,400+ subscribers. Unsubscribe anytime.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

interface PostCardProps {
  post: typeof posts[0];
  index: number;
}

const PostCard = ({ post, index }: PostCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[4/3] mb-6">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-accent/80 flex items-center justify-center"
        >
          <span className="text-accent-foreground font-semibold flex items-center gap-2">
            Read Article
            <ArrowRight size={18} />
          </span>
        </motion.div>
      </div>

      <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
        <span className="text-accent">{post.category}</span>
        <span>•</span>
        <span>{post.date}</span>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors leading-tight">
        {post.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {post.excerpt}
      </p>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
        <Clock size={14} />
        {post.readTime}
      </div>
    </motion.article>
  );
};

export default JournalSection;
