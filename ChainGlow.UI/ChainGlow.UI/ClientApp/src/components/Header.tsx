import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useCartStore } from '@/stores/cartStore';
import { CartDrawer } from './CartDrawer';

const navLinks = [
  { label: 'Collections', href: '/collections' },
  { label: 'Gift Cards', href: '/gift-cards' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const totalItems = useCartStore(state => state.items.reduce((sum, item) => sum + item.quantity, 0));

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      {/* Top banner */}
      <div className="banner-strip">
        ✨ Free Shipping on Orders Above ₹999 | Easy 30-Day Returns ✨
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-2xl font-display font-bold tracking-tight text-foreground">
            GIVA
          </h1>
        </Link>

        {/* Search bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for jewelry..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-5 w-5" />
          </button>
          <Link to="/account" className="p-2 text-foreground hover:text-primary transition-colors hidden sm:block">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/wishlist" className="p-2 text-foreground hover:text-primary transition-colors hidden sm:block">
            <Heart className="h-5 w-5" />
          </Link>
          <CartDrawer />
        </div>
      </div>

      {/* Nav links */}
      <nav className="hidden lg:block border-t border-border">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-8 py-2.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile search */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for jewelry..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
}
