import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/collections" className="hover:opacity-100 transition-opacity">Collections</Link></li>
              <li><Link to="/gift-cards" className="hover:opacity-100 transition-opacity">Gift Cards</Link></li>
              <li><Link to="/" className="hover:opacity-100 transition-opacity">New Arrivals</Link></li>
              <li><Link to="/" className="hover:opacity-100 transition-opacity">Best Sellers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/track-order" className="hover:opacity-100 transition-opacity">Track Order</Link></li>
              <li><Link to="/returns" className="hover:opacity-100 transition-opacity">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="hover:opacity-100 transition-opacity">FAQs</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">Our Story</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><Link to="/careers" className="hover:opacity-100 transition-opacity">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">GIVA</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Handcrafted jewelry designed to make every moment special. Sterling silver, ethically sourced.
            </p>
          </div>
        </div>
        <div className="border-t border-background/20 mt-10 pt-6 text-center text-sm opacity-60">
          © 2026 GIVA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
