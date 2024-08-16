import React, { useState } from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000); // Hide the popup after 3 seconds
  };

  return (
    <footer className="bg-customBlue text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Company Logo */}
        <div className="order-3 md:order-1 mt-6 md:mt-0 md:w-1/3 flex justify-center md:justify-start">
          <Image src="/images/Group 1.png" alt="Company Logo" width={150} height={50} />
        </div>
        
        {/* Links Section */}
        <div className="order-1 md:order-2 text-center md:text-left md:w-1/3">
          <h2 className="text-xl font-galano font-bold mb-4">Company</h2>
          <ul className="space-y-2">
            <li><a href="/about-us" className="hover:no-underline">About Us</a></li>
            <li><a href="/services" className="hover:no-underline">Services</a></li>
            <li><a href="/contact" className="hover:no-underline">Contact</a></li>
            <li><a href="/careers" className="hover:no-underline">Careers</a></li>
          </ul>
        </div>
        
        {/* Social Media Icons and Subscribe Form */}
        <div className="order-2 md:order-3 mt-6 md:mt-0 md:w-1/3 flex flex-col items-center md:items-end">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-2">
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/tiktok.svg" alt="TikTok" width={32} height={32} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/twitter-x.svg" alt="Twitter" width={32} height={32} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/instagram.svg" alt="Instagram" width={32} height={32} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/youtube.svg" alt="YouTube" width={32} height={32} />
            </a>
          </div>

          {/* Subscribe to Email Form */}
          <div className="w-full md:w-auto relative">
            <p className="mb-2 text-center md:text-right">Subscribe to our newsletter</p>
            <form className="flex items-center" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full md:w-auto rounded-l text-black"
              />
              <button className="bg-blue-500 text-white p-2 rounded-r flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                </svg>
              </button>
            </form>

            {/* Subscription Confirmation Popup */}
            {subscribed && (
              <div className="absolute top-full mt-2 w-full bg-green-500 text-white text-center py-1 rounded transition-opacity duration-300 opacity-100 animate-fadeIn">
                Subscribed!
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
