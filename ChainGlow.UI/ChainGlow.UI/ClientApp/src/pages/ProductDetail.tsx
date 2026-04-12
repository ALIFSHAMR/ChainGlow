import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { storefrontApiRequest, PRODUCT_BY_HANDLE_QUERY } from '@/lib/shopify';
import { useCartStore, ShopifyProduct } from '@/stores/cartStore';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Loader2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const { addItem, isLoading: cartLoading } = useCartStore();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', handle],
    queryFn: async () => {
      const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
      return data?.data?.productByHandle;
    },
    enabled: !!handle,
  });

  const variant = product?.variants?.edges?.[selectedVariantIndex]?.node;
  const images = product?.images?.edges || [];

  const handleAddToCart = async () => {
    if (!variant || !product) return;
    const shopifyProduct: ShopifyProduct = { node: product };
    await addItem({
      product: shopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success(`${product.title} added to bag`, { position: 'top-center' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {error && <p className="text-destructive text-center py-20">Failed to load product</p>}

        {product && (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Images */}
            <div className="space-y-3">
              <div className="aspect-square rounded-xl overflow-hidden bg-secondary">
                {images[selectedImage]?.node ? (
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">No image</div>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((img: { node: { url: string; altText: string | null } }, i: number) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                        i === selectedImage ? 'border-primary' : 'border-border'
                      }`}
                    >
                      <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-5">
              <div>
                <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground">{product.title}</h1>
                <p className="text-2xl font-semibold text-foreground mt-2">
                  {variant?.price.currencyCode === 'INR' ? '₹' : variant?.price.currencyCode}{' '}
                  {variant ? parseFloat(variant.price.amount).toFixed(0) : '—'}
                </p>
              </div>

              {/* Options */}
              {product.options?.filter((o: { name: string }) => o.name !== 'Title').map((option: { name: string; values: string[] }) => (
                <div key={option.name}>
                  <label className="text-sm font-medium text-foreground mb-2 block">{option.name}</label>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map((value: string) => {
                      const variantIdx = product.variants.edges.findIndex(
                        (v: { node: { selectedOptions: Array<{ name: string; value: string }> } }) =>
                          v.node.selectedOptions.some((o) => o.name === option.name && o.value === value)
                      );
                      return (
                        <button
                          key={value}
                          onClick={() => variantIdx >= 0 && setSelectedVariantIndex(variantIdx)}
                          className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                            variantIdx === selectedVariantIndex
                              ? 'border-primary bg-accent text-accent-foreground'
                              : 'border-border hover:border-primary'
                          }`}
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <Button
                onClick={handleAddToCart}
                disabled={cartLoading || !variant?.availableForSale}
                className="w-full"
                size="lg"
              >
                {cartLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <ShoppingBag className="w-4 h-4 mr-2" />
                )}
                {variant?.availableForSale ? 'Add to Bag' : 'Sold Out'}
              </Button>

              {product.description && (
                <div className="pt-4 border-t border-border">
                  <h3 className="font-display font-semibold mb-2">Description</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
