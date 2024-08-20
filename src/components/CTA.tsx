import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const CTASection: React.FC = () => {
  return (
    <section className="w-4/5 mx-auto flex flex-col md:flex-row mb-16">
      {/* CTA Text Section */}
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

      {/* Carousel Section */}
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <Carousel 
          showArrows={false}         // Remove arrows
          infiniteLoop={true} 
          autoPlay={true} 
          showThumbs={false}
          showStatus={false}         // Hide the "1/3" indicator
          showIndicators={false}     // Remove dots
        >
          <div className="relative">
            <img 
              src="/images/handsome-young-man-talking-phone-near-office-space_146671-18050.jpg" 
              alt="App in use 1" 
              className="w-[300px] h-[450px] object-cover mx-auto" 
            />
            <div className="absolute bottom-4 left-4 bg-blue-500 bg-opacity-50 text-white p-2 text-sm font-inter"> {/* Changed background to blue */}
              Easy booking on the go
            </div>
          </div>
          <div className="relative">
            <img 
              src="/images/mockuuups-iphone-14-pro-on-a-plane-mockup.jpeg" 
              alt="App in use 2" 
              className="w-[300px] h-[450px] object-cover mx-auto" 
            />
            <div className="absolute bottom-4 left-4 bg-blue-500 bg-opacity-50 text-white p-2 text-sm font-inter"> {/* Changed background to blue */}
              Stay updated with real-time notifications
            </div>
          </div>
          <div className="relative">
            <img 
              src="/images/young-handsome-man-with-bag-his-shoulder-hurry-airport_146671-17989.jpg" 
              alt="App in use 3" 
              className="w-[300px] h-[450px] object-cover mx-auto" 
            />
            <div className="absolute bottom-4 left-4 bg-blue-500 bg-opacity-50 text-white p-2 text-sm font-inter"> {/* Changed background to blue */}
              Hassle-free travel management
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CTASection;
