/* LabTG Company Landing — Main Page
   Assembles all sections: Hero, About, Services, Cases, Contact, Footer
*/
import CompanyNavbar from '@/components/CompanyNavbar';
import CompanyHeroSection from '@/components/CompanyHeroSection';
import CompanyAboutSection from '@/components/CompanyAboutSection';
import CompanyServicesSection from '@/components/CompanyServicesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CompanyContactSection from '@/components/CompanyContactSection';
import CompanyFooter from '@/components/CompanyFooter';

export default function CompanyHome() {
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
