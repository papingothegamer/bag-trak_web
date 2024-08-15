import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <motion.div
          className="text-2xl font-bold text-customBlue font-galano"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          bag-trak
        </motion.div>
        <div className="hidden md:flex items-center space-x-4 font-inter">
          <Link href="#" className="text-gray-600 hover:text-customBlue transition duration-300">Features</Link>
          <Link href="#" className="text-gray-600 hover:text-customBlue transition duration-300">Pricing</Link>
          <Link href="#" className="text-gray-600 hover:text-customBlue transition duration-300">Testimonials</Link>
          <Link href="#" className="bg-customBlue text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300">
            Get the App
          </Link>
        </div>
        <div className="md:hidden">
          {/* Mobile Menu Button */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
