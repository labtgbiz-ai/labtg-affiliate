/* LabTG Company Landing — Main Page
   Full presentation structure:
   Hero → About → Services → AI Lead Agent → Lead Attraction → Content → Producing → Team → Principles → Next Step CTA → Footer
*/
import CompanyNavbar from '@/components/CompanyNavbar';
import CompanyHeroSection from '@/components/CompanyHeroSection';
import CompanyAboutSection from '@/components/CompanyAboutSection';
import CompanyServicesSection from '@/components/CompanyServicesSection';
import AILeadAgentSection from '@/components/AILeadAgentSection';
import LeadAttractionSection from '@/components/LeadAttractionSection';
import ContentSection from '@/components/ContentSection';
import ProducingSection from '@/components/ProducingSection';
import TeamSection from '@/components/TeamSection';
import PrinciplesSection from '@/components/PrinciplesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import NextStepSection from '@/components/NextStepSection';
import CompanyFooter from '@/components/CompanyFooter';

export default function CompanyHome() {
  return (
    <div className="min-h-screen bg-white">
      <CompanyNavbar />
      <CompanyHeroSection />
      <CompanyAboutSection />
      <CompanyServicesSection />
      <AILeadAgentSection />
      <LeadAttractionSection />
      <ContentSection />
      <ProducingSection />
      <TeamSection />
      <PrinciplesSection />
      <CaseStudiesSection />
      <NextStepSection />
      <CompanyFooter />
    </div>
  );
}
