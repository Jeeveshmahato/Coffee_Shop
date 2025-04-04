import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative hero min-h-screen  bg-coffee-bg h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085)",
      }}
    >
      <div className="hero-overlay absolute z-[-0]"></div>
      <div className=" z-1 flex flex-col items-center justify-center ">
        {/* Animated Title */}
        <motion.h1
          className="text-5xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Brewtopia
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="text-lg text-center mt-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the finest coffee blends, crafted for perfection.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="mt-5 px-6 py-3 bg-amber-500 rounded-full text-lg shadow-lg hover:bg-amber-600"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          Explore Now
        </motion.button>

        {/* Floating Coffee Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1610632380989-680fe40816c6"
          alt="Coffee Cup"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[100px] opacity-80"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;
