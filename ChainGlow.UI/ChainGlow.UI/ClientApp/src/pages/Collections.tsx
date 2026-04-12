import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const collections = [
  { name: 'Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop', count: 45 },
  { name: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a5f3899f7ce8?w=400&h=500&fit=crop', count: 62 },
  { name: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop', count: 78 },
  { name: 'Bracelets', img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=500&fit=crop', count: 34 },
  { name: 'Anklets', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop', count: 22 },
  { name: 'Pendants', img: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=400&h=500&fit=crop', count: 41 },
  { name: 'Gifts for Him', img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=500&fit=crop', count: 28 },
  { name: 'Gifts for Her', img: 'https://images.unsplash.com/photo-1515562141589-67f0d569b41e?w=400&h=500&fit=crop', count: 55 },
];

export default function Collections() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-foreground mb-3">Our Collections</h1>
            <p className="text-muted-foreground">Browse curated collections crafted for every occasion.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {collections.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to="/" className="group block">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3">
                    <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.count} products</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
