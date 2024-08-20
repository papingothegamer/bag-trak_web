import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000); // Hide the popup after 3 seconds
  };

  return (
    <footer className="bg-customBlue text-white py-10">
      <div className="w-4/5 mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        
        {/* Links Sections */}
        <div className="w-full flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="text-xl font-galano font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><a href="/about-us" className="hover:no-underline">About Us</a></li>
              <li><a href="/services" className="hover:no-underline">Services</a></li>
              <li><a href="/contact" className="hover:no-underline">Contact</a></li>
              <li><a href="/careers" className="hover:no-underline">Careers</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="text-xl font-galano font-bold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><a href="/terms-of-use" className="hover:no-underline">Terms of Use</a></li>
              <li><a href="/license-agreement" className="hover:no-underline">License Agreement</a></li>
              <li><a href="/privacy-policy" className="hover:no-underline">Privacy Policy</a></li>
              <li><a href="/cookies-policy" className="hover:no-underline">Cookies Policy</a></li>
              <li><a href="/copyright-info" className="hover:no-underline">Copyright Information</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="text-xl font-galano font-bold mb-4">Support</h2>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:no-underline">FAQ</a></li>
              <li><a href="/search-guide" className="hover:no-underline">Search Guide</a></li>
              <li><a href="/contact-support" className="hover:no-underline">Contact</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/5">
            <h2 className="text-xl font-galano font-bold mb-4">Social Media</h2>
            <div className="flex space-x-4 mb-6">
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/tiktok.svg" alt="TikTok" width={32} height={32} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter-x.svg" alt="Twitter" width={32} height={32} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram.svg" alt="Instagram" width={32} height={32} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/youtube.svg" alt="YouTube" width={32} height={32} />
              </a>
            </div>

            {/* Subscribe to Email Form */}
            <div className="mt-6">
              <div>
                <p className="mb-2">Subscribe to our newsletter</p>
                <form className="flex items-center" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-2 w-full md:w-auto rounded-l text-black"
                  />
                  <button className="bg-black text-white p-2 rounded-r flex items-center">
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
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-4/5 mx-auto border-t border-gray-300 mt-10 pt-6">
        <div className="flex flex-col md:flex-row justify-start items-center space-x-2">
          <div className="text-2xl font-galano font-bold">
            bag-trak
          </div>
          <div className="text-sm">
            © 2024 bag-trak. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
