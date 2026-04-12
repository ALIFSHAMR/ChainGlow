import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const posts = [
  { title: '10 Ways to Style Silver Jewelry This Summer', excerpt: 'From layered necklaces to statement rings, discover the hottest silver jewelry trends for your summer wardrobe.', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=260&fit=crop', date: 'Apr 5, 2026', tag: 'Style Guide' },
  { title: 'How to Choose the Perfect Engagement Ring', excerpt: 'An expert guide to finding the ring that says "forever" — from gemstone cuts to metal choices.', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=260&fit=crop', date: 'Mar 28, 2026', tag: 'Buying Guide' },
  { title: 'Caring for Your Sterling Silver: A Complete Guide', excerpt: 'Keep your silver sparkling for years with these simple at-home cleaning and storage tips.', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=260&fit=crop', date: 'Mar 15, 2026', tag: 'Care Tips' },
  { title: 'The Rise of Sustainable Jewelry in India', excerpt: 'How ethical sourcing and eco-friendly packaging are reshaping the Indian jewelry industry.', img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=260&fit=crop', date: 'Mar 2, 2026', tag: 'Sustainability' },
  { title: 'Gifting Jewelry: A Guide for Every Occasion', excerpt: 'Birthdays, anniversaries, festivals — find the perfect jewelry gift for every celebration.', img: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=400&h=260&fit=crop', date: 'Feb 20, 2026', tag: 'Gift Guide' },
  { title: 'Understanding Jewelry Hallmarks & Certifications', excerpt: 'BIS hallmarks, karats, and purity standards explained — know what you\'re buying.', img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=260&fit=crop', date: 'Feb 10, 2026', tag: 'Education' },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-foreground mb-3">The GIVA Journal</h1>
            <p className="text-muted-foreground">Style tips, care guides, and stories from the world of jewelry.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, i) => (
              <motion.article key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl overflow-hidden group cursor-pointer product-card-hover">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium bg-accent text-accent-foreground px-2 py-1 rounded-full">{post.tag}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
