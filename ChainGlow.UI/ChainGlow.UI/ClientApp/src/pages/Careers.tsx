import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const openings = [
  { title: 'Senior Product Designer', dept: 'Design', location: 'Bangalore', type: 'Full-time' },
  { title: 'Full Stack Developer', dept: 'Engineering', location: 'Bangalore', type: 'Full-time' },
  { title: 'Marketing Manager', dept: 'Marketing', location: 'Mumbai', type: 'Full-time' },
  { title: 'Jewelry Artisan', dept: 'Production', location: 'Jaipur', type: 'Full-time' },
  { title: 'Customer Support Lead', dept: 'Support', location: 'Remote', type: 'Full-time' },
  { title: 'Content Writer', dept: 'Marketing', location: 'Remote', type: 'Contract' },
];

const perks = ['Health & dental insurance', 'Flexible work hours', 'Employee jewelry discounts', 'Learning & development budget', 'Team retreats', 'Stock options'];

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-br from-accent to-secondary text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Join the GIVA Family</h1>
            <p className="text-lg text-muted-foreground">Help us make beautiful jewelry accessible to everyone. We're always looking for passionate people.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">Open Positions</h2>
            <div className="space-y-4">
              {openings.map((job, i) => (
                <motion.div key={job.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {job.dept}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button size="sm">Apply Now</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">Perks & Benefits</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {perks.map(p => (
                <div key={p} className="bg-card rounded-xl p-5 border border-border text-sm font-medium text-foreground">✨ {p}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
