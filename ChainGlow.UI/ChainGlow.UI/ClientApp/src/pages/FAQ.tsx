import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'What is GIVA jewelry made of?', a: 'All our jewelry is made from 925 sterling silver, which is 92.5% pure silver. We also offer gold-plated and rose gold-plated options for variety.' },
  { q: 'Is GIVA jewelry BIS hallmarked?', a: 'Yes, all our sterling silver jewelry is BIS hallmarked, ensuring purity and authenticity. Each piece comes with a certificate of authenticity.' },
  { q: 'How do I care for my silver jewelry?', a: 'Store your jewelry in the pouch provided, away from moisture and direct sunlight. Clean gently with a soft cloth. Avoid contact with perfumes, lotions, and chemicals.' },
  { q: 'What is your return policy?', a: 'We offer a hassle-free 30-day return policy. Items must be in original condition with tags attached. Refunds are processed within 5-7 business days.' },
  { q: 'Do you offer free shipping?', a: 'Yes! We offer free shipping on all orders above ₹999. Standard delivery takes 5-7 business days, and express delivery takes 2-3 business days.' },
  { q: 'Can I customize or engrave jewelry?', a: 'Yes, we offer personalization on select pieces. Look for the "Customizable" tag on product pages, or contact us for special requests.' },
  { q: 'How do I track my order?', a: 'Once your order is shipped, you\'ll receive a tracking link via email and SMS. You can also track your order from the "Track Order" page on our website.' },
  { q: 'Do you have physical stores?', a: 'Yes, GIVA has 100+ retail stores across India. Visit our Store Locator page to find the nearest store.' },
  { q: 'What payment methods do you accept?', a: 'We accept credit/debit cards, UPI, net banking, wallets (Paytm, PhonePe), and Cash on Delivery for select locations.' },
  { q: 'Is there a warranty on GIVA jewelry?', a: 'We offer a 6-month warranty against manufacturing defects. This covers issues like stone fallout, clasp breakage, and plating wear under normal use.' },
];

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-foreground mb-3">Frequently Asked Questions</h1>
            <p className="text-muted-foreground">Find answers to the most common questions about GIVA.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main> */}
      <Footer />
    </div>
  );
}
