import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Users, Hammer, Eye, Heart, Leaf, LucideIcon } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

import studioInterior from '@/assets/studio-interior.jpg';
import studioHands from '@/assets/studio-hands.jpg';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';

const capabilities = [
  { icon: Hammer, title: 'Traditional Woodworking', description: 'Hand-carving, joinery, and finishing techniques passed through generations.' },
  { icon: Eye, title: 'Design Consultation', description: 'Collaborative visioning sessions to understand your space and aesthetic goals.' },
  { icon: Heart, title: 'Custom Commissions', description: 'Bespoke pieces designed specifically for your environment and vision.' },
  { icon: Leaf, title: 'Sustainable Sourcing', description: 'Ethically collected driftwood from protected coastal regions.' },
];

const team = [
  {
    name: 'Marcus Webb',
    role: 'Master Craftsman & Founder',
    image: team1,
    bio: 'With 25 years of woodworking experience, Marcus founded the studio after discovering his first piece of driftwood on the Oregon coast.',
    specialty: 'Large-scale sculptures',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Lead Designer',
    image: team2,
    bio: 'A former architect, Elena brings spatial awareness and modern design sensibility to every project she touches.',
    specialty: 'Furniture design',
  },
];

const timeline = [
  { year: '2012', title: 'The Beginning', description: 'Marcus discovers his passion for driftwood art on a solo trip to Oregon.' },
  { year: '2015', title: 'First Studio', description: 'Opens a small workshop in Monterey, creating pieces for local galleries.' },
  { year: '2018', title: 'Growth', description: 'Elena joins the team, bringing architectural expertise and expanding our offerings.' },
  { year: '2020', title: 'New Space', description: 'Moves to our current 5,000 sq ft coastal workshop.' },
  { year: '2024', title: 'Today', description: 'A team of 6 artisans creating pieces for collectors worldwide.' },
];

const StudioSection = () => {
  return (
    <section id="studio" className="py-32 bg-background">
      {/* Introduction */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-6 block">
              Behind the Scenes
            </span>
            <h2 className="display-large mb-8">
              The<br />
              <span className="text-foreground/30">Studio</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Nestled on California's central coast, our 5,000 square foot 
                workshop is where raw driftwood transforms into timeless art. 
                Large windows flood the space with natural light, and the 
                sound of waves provides a constant reminder of our materials' origins.
              </p>
              <p>
                Every corner is designed for creation—from the material storage 
                where pieces cure and await their turn, to the finishing room 
                where final touches bring each work to life.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <MapPin className="text-accent" size={24} />
                <div>
                  <span className="font-semibold block">Monterey, CA</span>
                  <span className="text-muted-foreground text-sm">Pacific Coast</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-accent" size={24} />
                <div>
                  <span className="font-semibold block">Tours Available</span>
                  <span className="text-muted-foreground text-sm">By appointment</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  src={studioHands}
                  alt="Craftsman at work"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-accent p-8 text-accent-foreground"
              >
                <span className="text-5xl font-bold block">5,000</span>
                <p className="text-sm uppercase tracking-wider mt-2">Sq ft Workshop</p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Capabilities */}
      <div className="py-32 bg-secondary/30 mt-32">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              What We Do
            </span>
            <h2 className="display-large">
              Our<br />
              <span className="text-foreground/30">Capabilities</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <CapabilityCard key={cap.title} capability={cap} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              Our Journey
            </span>
            <h2 className="display-large">
              Studio<br />
              <span className="text-foreground/30">Timeline</span>
            </h2>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border origin-top"
            />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <TimelineItem key={item.year} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              The Artisans
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold">Meet Our Team</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>

          <ScrollReveal delay={0.4} className="text-center mt-16">
            <p className="text-primary-foreground/70 text-lg mb-8">
              Plus 4 additional talented artisans and apprentices
            </p>
            <div className="flex justify-center gap-4">
              <Users size={24} className="text-accent" />
              <span className="text-xl font-semibold">6 Team Members</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

interface CapabilityCardProps {
  capability: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
}

const CapabilityCard = ({ capability, index }: CapabilityCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = capability.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group bg-card p-8 border border-border hover:border-accent transition-colors"
    >
      <motion.div
        className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors"
        whileHover={{ rotate: 10 }}
      >
        <Icon size={28} className="text-accent group-hover:text-accent-foreground transition-colors" />
      </motion.div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
        {capability.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {capability.description}
      </p>
    </motion.div>
  );
};

interface TimelineItemProps {
  item: typeof timeline[0];
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`relative grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:direction-rtl'}`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
        className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent z-10"
      />

      <div className={`pl-16 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:col-start-2'}`}>
        <span className="text-accent text-4xl font-bold">{item.year}</span>
        <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
        <p className="text-muted-foreground">{item.description}</p>
      </div>
    </motion.div>
  );
};

interface TeamMemberCardProps {
  member: typeof team[0];
  index: number;
}

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group"
    >
      <div className="relative overflow-hidden aspect-[3/4] mb-6">
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-accent via-accent/50 to-transparent flex flex-col justify-end p-6"
        >
          <p className="text-accent-foreground/90">{member.bio}</p>
          <p className="text-accent-foreground font-semibold mt-4">
            Specialty: {member.specialty}
          </p>
        </motion.div>
      </div>
      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
        {member.name}
      </h3>
      <p className="text-primary-foreground/60">{member.role}</p>
    </motion.div>
  );
};

export default StudioSection;
