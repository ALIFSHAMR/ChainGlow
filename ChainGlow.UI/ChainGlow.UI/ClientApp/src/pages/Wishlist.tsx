import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  // Placeholder — in production this would read from a store/API
  const items: never[] = [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8 text-center">My Wishlist</h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <Heart className="h-16 w-16 mx-auto text-muted-foreground/30 mb-6" />
              <h2 className="text-xl font-display font-semibold text-foreground mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6">Save your favorite pieces here so you never lose them.</p>
              <Link to="/">
                <Button size="lg" className="gap-2"><ShoppingBag className="h-4 w-4" /> Browse Jewelry</Button>
              </Link>
            </div>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
}
