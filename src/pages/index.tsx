import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HorizontalBanner from '../components/HorizontalBanner';
import FeatureSection from '../components/Features';
import PricingSection from '../components/Pricing';
import TestimonialsSection from '../components/Testimonials';
import CTASection from '../components/CTA';
import Footer from '@/components/Footer';
import FAQs from "../components/FAQs";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HorizontalBanner />
      <FeatureSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQs />
      <CTASection />
      <Footer />

      {/* Other components will go here */}
    </div>
  );
};

export default Home;
