import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Loader2 } from 'lucide-react';
import { ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';

interface ProductCardProps {
  product: ShopifyProduct;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addItem, isLoading } = useCartStore();
  const { node } = product;
  const image = node.images.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;
  const variant = node.variants.edges[0]?.node;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success(`${node.title} added to bag`, { position: 'top-center' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/product/${node.handle}`} className="group block">
        <div className="product-card-hover rounded-lg overflow-hidden bg-card border border-border">
          {/* Image */}
          <div className="aspect-square overflow-hidden bg-secondary relative">
            {image ? (
              <img
                src={image.url}
                alt={image.altText || node.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No image
              </div>
            )}
            {/* Quick add button */}
            <button
              onClick={handleAddToCart}
              disabled={isLoading || !variant}
              className="absolute bottom-3 right-3 h-9 w-9 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShoppingBag className="h-4 w-4" />}
            </button>
          </div>

          {/* Info */}
          <div className="p-3">
            <h3 className="text-sm font-medium text-foreground truncate">{node.title}</h3>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">
                {price.currencyCode === 'INR' ? '₹' : price.currencyCode} {parseFloat(price.amount).toFixed(0)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
