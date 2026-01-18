import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, Clock, Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import aboutHero from '@/assets/about-hero.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm uppercase tracking-[0.3em] text-accent mb-6 block"
            >
              Get in Touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="display-huge"
            >
              LET'S
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="display-huge text-foreground/20"
            >
              CREATE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 text-xl text-muted-foreground max-w-xl"
            >
              Ready to bring organic elegance into your space? 
              We'd love to hear about your vision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2 space-y-12"
            >
              {/* Contact Details */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-8">Contact Details</h3>
                
                <ContactItem 
                  icon={Mail}
                  label="Email Us"
                  value="hello@driftwood.studio"
                  href="mailto:hello@driftwood.studio"
                />
                <ContactItem 
                  icon={Phone}
                  label="Call Us"
                  value="+1 (234) 567-890"
                  href="tel:+1234567890"
                />
                <ContactItem 
                  icon={MapPin}
                  label="Visit Us"
                  value="123 Coastal Drive, Monterey, CA 93940"
                />
                <ContactItem 
                  icon={Clock}
                  label="Studio Hours"
                  value="Mon-Fri: 9AM-6PM, Sat: By Appointment"
                />
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm uppercase tracking-widest font-medium mb-6">
                  Follow Our Journey
                </h4>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, href: '#', label: 'Instagram' },
                    { icon: Twitter, href: '#', label: 'Twitter' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon size={22} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative aspect-[4/3] overflow-hidden group"
              >
                <img 
                  src={aboutHero} 
                  alt="Studio location" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <div className="text-primary-foreground">
                    <p className="font-semibold">Coastal Studios</p>
                    <p className="text-sm text-primary-foreground/70">Monterey, California</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <SuccessMessage />
              ) : (
                <form onSubmit={handleSubmit} className="bg-card p-8 md:p-12 border border-border">
                  <h3 className="text-2xl font-bold mb-8">Start Your Project</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <FormField
                      label="Your Name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                    />
                    <FormField
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <FormField
                      label="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (234) 567-890"
                    />
                    <div>
                      <label className="block text-sm uppercase tracking-wider mb-3 text-muted-foreground">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-background border border-border p-4 text-foreground focus:border-accent outline-none transition-colors"
                      >
                        <option value="">Select a type</option>
                        <option value="sculpture">Custom Sculpture</option>
                        <option value="furniture">Bespoke Furniture</option>
                        <option value="lighting">Lighting Design</option>
                        <option value="installation">Architectural Installation</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm uppercase tracking-wider mb-3 text-muted-foreground">
                      Budget Range
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['$2.5k-$5k', '$5k-$15k', '$15k-$50k', '$50k+'].map((budget) => (
                        <BudgetOption
                          key={budget}
                          value={budget}
                          selected={formData.budget === budget}
                          onClick={() => setFormData({ ...formData, budget })}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm uppercase tracking-wider mb-3 text-muted-foreground">
                      Tell Us About Your Vision
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full bg-background border border-border p-4 text-foreground focus:border-accent outline-none transition-colors resize-none"
                      placeholder="Describe your project, space, timeline, and any inspiration you'd like to share..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-accent-foreground"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              Common Questions
            </span>
            <h2 className="display-large">
              FAQ
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem 
              question="How long does a typical commission take?"
              answer="Timelines vary based on complexity. Small sculptures take 4-8 weeks, furniture pieces 8-16 weeks, and large installations can take 3-12 months. We'll provide a detailed timeline during our initial consultation."
            />
            <FAQItem 
              question="Do you ship internationally?"
              answer="Yes! We work with specialized art shipping companies to safely deliver pieces worldwide. Shipping costs and logistics are discussed during the design phase."
            />
            <FAQItem 
              question="Can I visit your studio?"
              answer="Absolutely! We welcome studio visits by appointment. It's a great opportunity to see our work process, meet the artisans, and select materials for your project."
            />
            <FAQItem 
              question="What happens if I don't like the final piece?"
              answer="We involve clients at every stage of the design process with detailed drawings and regular updates. Major changes after completion are rare, but we always work to ensure your complete satisfaction."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface ContactItemProps {
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  label: string;
  value: string;
  href?: string;
}

const ContactItem = ({ icon: Icon, label, value, href }: ContactItemProps) => {
  const content = (
    <motion.div
      className="flex items-start gap-4 group"
      whileHover={{ x: 5 }}
    >
      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
        <Icon size={20} className="group-hover:text-accent-foreground transition-colors" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="font-medium group-hover:text-accent transition-colors">{value}</p>
      </div>
    </motion.div>
  );

  return href ? <a href={href}>{content}</a> : content;
};

interface FormFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

const FormField = ({ label, type, value, onChange, placeholder, required }: FormFieldProps) => (
  <div>
    <label className="block text-sm uppercase tracking-wider mb-3 text-muted-foreground">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full bg-background border border-border p-4 text-foreground focus:border-accent outline-none transition-colors placeholder:text-muted-foreground/50"
    />
  </div>
);

interface BudgetOptionProps {
  value: string;
  selected: boolean;
  onClick: () => void;
}

const BudgetOption = ({ value, selected, onClick }: BudgetOptionProps) => (
  <motion.button
    type="button"
    onClick={onClick}
    className={`p-3 text-sm font-medium border transition-all ${
      selected 
        ? 'bg-accent text-accent-foreground border-accent' 
        : 'border-border hover:border-accent'
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {value}
  </motion.button>
);

const SuccessMessage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-card p-12 border border-accent text-center"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring" }}
      className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-8"
    >
      <ArrowUpRight size={32} className="text-accent-foreground" />
    </motion.div>
    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
    <p className="text-muted-foreground text-lg max-w-md mx-auto">
      Thank you for reaching out. We'll review your project details and 
      get back to you within 24-48 hours.
    </p>
  </motion.div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="border border-border bg-card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-secondary/30 transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-2xl text-accent flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
