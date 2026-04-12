import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Package, Truck, CheckCircle2, Circle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const demoSteps = [
  { label: 'Order Placed', date: 'Apr 8, 2026', done: true, icon: Package },
  { label: 'Shipped', date: 'Apr 9, 2026', done: true, icon: Truck },
  { label: 'Out for Delivery', date: 'Apr 11, 2026', done: true, icon: Truck },
  { label: 'Delivered', date: 'Expected Apr 12', done: false, icon: CheckCircle2 },
];

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [tracked, setTracked] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-display font-bold text-foreground mb-3">Track Your Order</h1>
            <p className="text-muted-foreground">Enter your order ID to see the latest status.</p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <form onSubmit={e => { e.preventDefault(); setTracked(true); }} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="orderId">Order ID</Label>
                <Input id="orderId" placeholder="e.g. GIVA-2026-78423" value={orderId} onChange={e => setOrderId(e.target.value)} />
              </div>
              <Button className="w-full" size="lg" type="submit">Track Order</Button>
            </form>

            {tracked && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 pt-6 border-t border-border">
                <h2 className="font-display font-semibold text-lg text-foreground mb-6">Order Status</h2>
                <div className="space-y-0">
                  {demoSteps.map((step, i) => (
                    <div key={step.label} className="flex items-start gap-4 relative">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step.done ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          {step.done ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                        </div>
                        {i < demoSteps.length - 1 && <div className={`w-0.5 h-10 ${step.done ? 'bg-primary' : 'bg-border'}`} />}
                      </div>
                      <div className="pb-8">
                        <p className={`font-medium text-sm ${step.done ? 'text-foreground' : 'text-muted-foreground'}`}>{step.label}</p>
                        <p className="text-xs text-muted-foreground">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
