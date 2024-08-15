import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HorizontalBanner from '../components/HorizontalBanner';
import FeatureSection from '../components/Features';
import PricingSection from '../components/Pricing';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HorizontalBanner />
      <FeatureSection />
      <PricingSection />
      {/* Other components will go here */}
    </div>
  );
};

export default Home;
