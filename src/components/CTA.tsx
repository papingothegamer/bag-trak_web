import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const CTASection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 order-2 md:order-1 bg-black text-white p-10 flex flex-col justify-center items-start">
        <h2 className="text-4xl font-galano mb-6">Download Our App</h2>
        <p className="mb-6">Get the app to make your travel experience seamless and stress-free.</p>
        <div className="flex space-x-4 items-center">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Image 
              src="/images/pngwing.com.png" 
              alt="Google Play Store" 
              width={150} 
              height={50} 
              className="object-contain"
            />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Image 
              src="/images/apple-app-store-badge.webp" 
              alt="Apple App Store" 
              width={150} 
              height={50} 
              className="object-contain"
            />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
          <div>
            <img src="/images/app-use-1.png" alt="App in use 1" />
          </div>
          <div>
            <img src="/images/app-use-2.png" alt="App in use 2" />
          </div>
          <div>
            <img src="/images/app-use-3.png" alt="App in use 3" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CTASection;
