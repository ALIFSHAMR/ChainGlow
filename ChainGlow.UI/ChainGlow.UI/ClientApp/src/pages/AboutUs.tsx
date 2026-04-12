import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const values = [
  { title: 'Ethically Sourced', desc: 'Every gemstone and metal is responsibly sourced with full traceability.' },
  { title: 'Handcrafted', desc: 'Our artisans pour love into every piece, ensuring perfection in detail.' },
  { title: 'Affordable Luxury', desc: "Premium 925 sterling silver jewelry at prices that don't break the bank." },
  { title: 'Sustainable', desc: 'Eco-friendly packaging and processes that respect our planet.' },
];

const team = [
  { name: 'Ishendra Agarwal', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face' },
  { name: 'Priya Sharma', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face' },
  { name: 'Rahul Mehta', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face' },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* <main className="flex-1">
        {/* Hero */}
        {/* <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-accent to-secondary overflow-hidden">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8 }} className="text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Our Story</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Born from a passion to make fine jewelry accessible, GIVA crafts stunning sterling silver pieces that celebrate life's precious moments — without the luxury price tag.
            </p>
          </motion.div>
        </section> */}

        {/* Mission */}
        {/* <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
              <img src="https://images.unsplash.com/photo-1515562141589-67f0d569b41e?w=600&h=500&fit=crop" alt="Jewelry crafting" className="rounded-2xl shadow-lg w-full object-cover h-[400px]" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At GIVA, we believe that everyone deserves to wear beautiful jewelry. We combine traditional craftsmanship with modern design to create pieces that tell your unique story.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Since our founding, we've served over 5 million happy customers across India, delivering joy one sparkle at a time. Every piece is BIS hallmarked and comes with a certificate of authenticity.
              </p>
            </motion.div>
          </div>
        </section> */}

        {/* Values */}
        {/* <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">What We Stand For</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-sm text-center">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Team */}
        {/* <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-12">Meet Our Team</h2>
            <div className="flex flex-wrap justify-center gap-10">
              {team.map((t, i) => (
                <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="w-56">
                  <img src={t.img} alt={t.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md" />
                  <h3 className="font-display font-semibold text-foreground">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
      {/* </main> */} 
      <Footer />
    </div>
  );
}
