import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary-foreground/60 mb-6 block">
              Get in Touch
            </span>
            
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] mb-8">
              Let's Create<br />
              <span className="text-primary-foreground/30">Together</span>
            </h2>

            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-12 max-w-md">
              Whether you're looking for a statement piece, custom furniture, or a 
              collaborative installation, we'd love to hear from you.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.a
                href="mailto:hello@driftwood.studio"
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg">hello@driftwood.studio</span>
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Phone size={20} />
                </div>
                <span className="text-lg">+1 (234) 567-890</span>
              </motion.a>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span className="text-lg">Coastal Studios, CA</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-3 text-primary-foreground/60">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-primary-foreground/20 py-4 text-lg focus:border-accent outline-none transition-colors placeholder:text-primary-foreground/30"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-3 text-primary-foreground/60">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-primary-foreground/20 py-4 text-lg focus:border-accent outline-none transition-colors placeholder:text-primary-foreground/30"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-3 text-primary-foreground/60">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-primary-foreground/20 py-4 text-lg focus:border-accent outline-none transition-colors resize-none placeholder:text-primary-foreground/30"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 font-medium text-lg uppercase tracking-wider"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <ArrowUpRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
