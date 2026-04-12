import { motion } from 'framer-motion';
import heroBanner from '@/assets/hero-banner.jpg';

export function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[300px] sm:h-[400px] lg:h-[480px]">
        <img
          src={heroBanner}
          alt="Luxury jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-lg"
            >
              <p className="text-primary-foreground/80 text-sm font-medium tracking-widest uppercase mb-2">
                New Arrivals
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-4">
                Timeless Silver Jewellery
              </h2>
              <p className="text-primary-foreground/80 text-base mb-6 max-w-sm">
                Discover our handcrafted collection of sterling silver jewelry designed to make every moment special.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium text-sm tracking-wide hover:opacity-90 transition-opacity">
                Shop Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
