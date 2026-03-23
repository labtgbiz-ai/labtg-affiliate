/* LabTG Company Landing — Main Page
   Assembles all sections: Hero, About, Services, Cases, Contact, Footer
*/
import { useEffect } from 'react';
import CompanyNavbar from '@/components/CompanyNavbar';
import CompanyHeroSection from '@/components/CompanyHeroSection';
import CompanyAboutSection from '@/components/CompanyAboutSection';
import CompanyServicesSection from '@/components/CompanyServicesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CompanyContactSection from '@/components/CompanyContactSection';
import CompanyFooter from '@/components/CompanyFooter';

export default function CompanyHome() {
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
    <div className="min-h-screen bg-white">
      <CompanyNavbar />
      <CompanyHeroSection />
      <CompanyAboutSection />
      <CompanyServicesSection />
      <CaseStudiesSection />
      <CompanyContactSection />
      <CompanyFooter />
    </div>
  );
}
