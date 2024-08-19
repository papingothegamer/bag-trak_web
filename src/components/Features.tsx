import Image from 'next/image';

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white flex justify-center">
      <div className="w-11/12 max-w-7xl bg-customBlue rounded-t-3xl px-4 py-8 mx-auto">
        <div className="w-11/12 mx-auto mt-8 bg-white rounded-t-3xl shadow-lg px-4 py-8 text-center">
          <h2 className="text-4xl font-galano text-customBlue mb-8">Why Bag-Trak?</h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="p-6 rounded-lg">
                <Image
                  src="/images/iPhone 15 Pro.png"
                  alt="Track Your Bags"
                  width={200}
                  height={200}
                  className="mx-auto rounded"
                />
                <h3 className="text-2xl font-galano text-gray-700 mt-4">Track Your Bags in Real-Time</h3>
                <p className="text-gray-600 font-inter mt-2">
                  Get instant updates on the location and status of your luggage, ensuring peace of mind.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="p-6 rounded-lg">
                <Image
                  src="/images/female-staff-interacting-with-passenger_107420-85082.jpg"
                  alt="Seamless Integration"
                  width={200}
                  height={200}
                  className="mx-auto rounded"
                />
                <h3 className="text-2xl font-galano text-gray-700 mt-4">Seamless Integration with Airlines</h3>
                <p className="text-gray-600 font-inter mt-2">
                  Partnered with major airlines to provide reliable and accurate tracking services.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="p-6 rounded-lg">
                <Image
                  src="/images/portrait-attractive-bearded-man-earphones_171337-4801.jpg"
                  alt="User-Friendly Interface"
                  width={200}
                  height={200}
                  className="mx-auto rounded"
                />
                <h3 className="text-2xl font-galano text-gray-700 mt-4">User-Friendly Interface</h3>
                <p className="text-gray-600 font-inter mt-2">
                  Intuitive design that makes it easy to manage your bags and track their status on the go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
