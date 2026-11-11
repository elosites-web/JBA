import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseJBA } from './components/WhyChooseJBA';
import { ServiceArea } from './components/ServiceArea';
import { FAQ } from './components/FAQ';
import { QuoteForm } from './components/QuoteForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Initialize scroll detection with prefers-reduced-motion support
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAF6] text-neutral-900 selection:bg-[#77D100] selection:text-[#0A2F0D]">
      {/* Sticky Top Header */}
      <Header />

      {/* Main Content Landmark */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* 3 Core Services */}
        <Services />

        {/* How It Works - 3 Steps */}
        <HowItWorks />

        {/* Why Choose JBA - 3 Verifiable Facts */}
        <WhyChooseJBA />

        {/* Service Area - Jundiaí */}
        <ServiceArea />

        {/* FAQ - Accessible Accordion */}
        <FAQ />

        {/* Quote Form - Direct WhatsApp Message Builder */}
        <QuoteForm />

        {/* Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
