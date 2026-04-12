import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Package, MapPin, Heart } from 'lucide-react';

export default function Account() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-display font-bold text-foreground mb-8">My Account</h1>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="bg-card border border-border">
              <TabsTrigger value="profile" className="gap-2"><User className="h-4 w-4" /> Profile</TabsTrigger>
              <TabsTrigger value="orders" className="gap-2"><Package className="h-4 w-4" /> Orders</TabsTrigger>
              <TabsTrigger value="addresses" className="gap-2"><MapPin className="h-4 w-4" /> Addresses</TabsTrigger>
              <TabsTrigger value="wishlist" className="gap-2"><Heart className="h-4 w-4" /> Wishlist</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="font-display font-semibold text-lg text-foreground mb-6">Personal Information</h2>
                <form className="space-y-4 max-w-md" onSubmit={e => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" defaultValue="Priya Sharma" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accEmail">Email</Label>
                    <Input id="accEmail" type="email" defaultValue="priya@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accPhone">Phone</Label>
                    <Input id="accPhone" type="tel" defaultValue="+91 98765 43210" />
                  </div>
                  <Separator />
                  <Button>Save Changes</Button>
                </form>
              </div>
            </TabsContent>

            <TabsContent value="orders">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="font-display font-semibold text-lg text-foreground mb-4">Order History</h2>
                <div className="text-center py-12 text-muted-foreground">
                  <Package className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p>No orders yet. Start shopping to see your orders here.</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="addresses">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display font-semibold text-lg text-foreground">Saved Addresses</h2>
                  <Button size="sm">Add Address</Button>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p>No saved addresses yet.</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="wishlist">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="font-display font-semibold text-lg text-foreground mb-4">Wishlist</h2>
                <div className="text-center py-12 text-muted-foreground">
                  <Heart className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p>Your wishlist is empty.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
