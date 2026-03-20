/* LabTG Affiliate Landing Page — Main Home
   Design: Glassmorphism + Gradient Mesh
   Sections: Hero → HowItWorks → Earnings → Calculator → WhyLabTG → Team → Contact → Footer
*/
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import EarningsSection from '@/components/EarningsSection';
import CalculatorSection from '@/components/CalculatorSection';
import WhyLabTGSection from '@/components/WhyLabTGSection';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  // Initialize scroll reveal for all .reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    // Observe all reveal elements after a short delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      const revealEls = document.querySelectorAll('.reveal');
      revealEls.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <EarningsSection />
      <CalculatorSection />
      <WhyLabTGSection />

      <ContactSection />
      <Footer />
    </div>
  );
}
