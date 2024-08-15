import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 flex items-center justify-center h-full">
        <motion.div
          className="text-center text-white font-galano"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Track Your Bags Easily</h1>
          <p className="text-lg md:text-2xl mb-6 font-inter">
            Get real-time updates and peace of mind with Bag-Trak.
          </p>
          <a href="#" className="bg-customBlue text-white px-6 py-3 rounded-md font-inter hover:bg-blue-500 transition duration-300">
            Get the App
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
