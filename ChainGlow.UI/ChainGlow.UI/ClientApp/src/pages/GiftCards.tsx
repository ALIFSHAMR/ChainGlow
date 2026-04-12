import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Gift } from 'lucide-react';
import { useState } from 'react';

const amounts = [500, 1000, 2000, 3000, 5000];

export default function GiftCards() {
  const [selected, setSelected] = useState(1000);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Gift className="h-12 w-12 mx-auto text-primary mb-4" />
            <h1 className="text-4xl font-display font-bold text-foreground mb-3">GIVA Gift Cards</h1>
            <p className="text-muted-foreground">The perfect gift for someone special. Let them choose what they love.</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="mb-6">
              <Label className="mb-3 block">Select Amount</Label>
              <div className="flex flex-wrap gap-3">
                {amounts.map(a => (
                  <button key={a} onClick={() => setSelected(a)}
                    className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-colors ${selected === a ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-foreground hover:border-primary'}`}>
                    ₹{a.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
            </div>

            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="recipientName">Recipient's Name</Label>
                  <Input id="recipientName" placeholder="Their name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipientEmail">Recipient's Email</Label>
                  <Input id="recipientEmail" type="email" placeholder="their@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="giftMsg">Personal Message (optional)</Label>
                <Textarea id="giftMsg" placeholder="Write a heartfelt message..." rows={3} />
              </div>
              <Button className="w-full" size="lg">Buy Gift Card — ₹{selected.toLocaleString('en-IN')}</Button>
            </form>
          </div>
        </div>
      </main> */}
      <Footer />
    </div>
  );
}
