import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RotateCcw, Clock, CreditCard, ShieldCheck } from 'lucide-react';

const policies = [
  { icon: RotateCcw, title: '30-Day Returns', desc: 'Not satisfied? Return any item within 30 days of delivery for a full refund, no questions asked.' },
  { icon: Clock, title: 'Quick Refunds', desc: 'Refunds are processed within 5-7 business days after we receive the returned item.' },
  { icon: CreditCard, title: 'Original Payment', desc: 'Refunds are credited to the original payment method — card, UPI, or wallet.' },
  { icon: ShieldCheck, title: '6-Month Warranty', desc: 'All jewelry comes with a 6-month warranty covering manufacturing defects.' },
];

const steps = [
  'Log in to your account and go to "My Orders".',
  'Select the item you wish to return and click "Request Return".',
  'Choose a reason for return and schedule a pickup date.',
  'Pack the item securely in its original packaging with tags attached.',
  'Our delivery partner will pick it up from your doorstep.',
  'Refund will be initiated once we receive and inspect the item.',
];

export default function Returns() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-foreground mb-3">Returns & Refunds</h1>
            <p className="text-muted-foreground">We want you to love every piece. If not, returning is easy.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {policies.map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <p.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">How to Return</h2>
            <ol className="space-y-4 max-w-2xl mx-auto">
              {steps.map((s, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <p className="text-muted-foreground pt-1">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
