import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from './ProductCard';
import { Loader2 } from 'lucide-react';

export function ProductGrid() {
  const { data: products, isLoading, error } = useProducts(20);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground">All Products</h2>
          {products && products.length > 0 && (
            <p className="text-sm text-muted-foreground mt-1">{products.length} designs</p>
          )}
        </div>
        <select className="text-sm border border-border rounded-lg px-3 py-2 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
          <option>Best Selling</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {error && (
        <div className="text-center py-20">
          <p className="text-destructive">Failed to load products</p>
        </div>
      )}

      {!isLoading && !error && products && products.length === 0 && (
        <div className="text-center py-20 border-2 border-dashed border-border rounded-xl">
          <p className="text-lg font-display text-foreground mb-2">No products found</p>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Your store doesn't have any products yet. Tell us what products you'd like to add and we'll set them up for you!
          </p>
        </div>
      )}

      {products && products.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.node.id} product={product} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
