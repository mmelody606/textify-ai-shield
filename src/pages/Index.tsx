
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import PricingSection from "@/components/home/PricingSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import ComparisonSection from "@/components/home/ComparisonSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <PricingSection />
      <ComparisonSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
