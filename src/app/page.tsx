'use client';
import ClientsSection from '@/components/Client';
import DemoSection from '@/components/DemoSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MarketingSection from '@/components/MarketingSection';

import PromoSection from '@/components/PromoSection';
import StatsSection from '@/components/StateSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
 
  return (
    <div className="flex flex-col"> {/* This ensures vertical stacking */}
      <Hero />
      <ClientsSection />
      <StatsSection/>
      <PromoSection />
      
      <TestimonialSection />
      <MarketingSection/>
      <DemoSection/>
          <Footer />
    </div>
  );
}

