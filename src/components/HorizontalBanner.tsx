import { useEffect, useRef } from 'react';
import Image from 'next/image';
import React from 'react';  // Add this import to fix TypeScript errors

const HorizontalBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const content = contentRef.current;

    if (banner && content) {
      // Clone the content to create a seamless loop
      const clone = content.innerHTML;
      content.innerHTML += clone;

      // Get the width of the container and content
      const containerWidth = banner.offsetWidth;
      const contentWidth = content.scrollWidth;

      // Function to animate scrolling
      const scrollBanner = () => {
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const scrollPosition = (elapsed * 0.1) % contentWidth;

          // Move content to the left
          content.style.transform = `translateX(-${scrollPosition}px)`;

          // Continue the animation
          requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      };

      // Start the animation
      scrollBanner();
    }
  }, []);

  return (
    <div className="my-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl  text-customBlue font-bold font-galano">Our Partners</h2>
        <p className="text-gray-600 font-inter mt-4"> Trusted by leading airlines worldwide </p>
      </div>

      {/* Horizontal Banner */}
      <div className="overflow-hidden relative" ref={bannerRef}>
        {/* Blurred sides */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

        {/* Scrolling content */}
        <div
          ref={contentRef}
          className="whitespace-nowrap flex items-center space-x-6"
          style={{ willChange: 'transform' }}
        >
          {/* Logos (Duplicated content for seamless scroll) */}
          {Array.from({ length: 10 }).map((_, index) => (
            <React.Fragment key={index}>
              <Image
                src="/images/5bbc0dadab82d-removebg-preview.png"
                alt="Logo 1"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/british-airways-logo-black-and-white.png"
                alt="Logo 2"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/png-clipart-brand-logo-product-design-font-qatar-airways-logo-text-logo-removebg-preview.png"
                alt="Logo 3"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/Emirates Black Print.png"
                alt="Logo 4"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/png-transparent-abu-dhabi-etihad-airways-united-airlines-flag-carrier-fly-emirates-text-logo-black-thumbnail-removebg-preview.png"
                alt="Logo 5"
                width={100}
                height={50}
                className="object-contain"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBanner;
