import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white flex flex-col items-center justify-center p-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} />
        <motion.div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} />
        <motion.div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div className="mb-8 flex justify-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
          <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
              <img 
                src="/assets/portrait.jpg" 
                alt="Durvank Gade" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/assets/profile.svg';
                }}
              />
            </div>
            <motion.div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.7 }} />
          </motion.div>
        </motion.div>
        {/* Name and Title */}
        <motion.h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
          Durvank Gade
        </motion.h1>
        <motion.p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>
          AI/ML Specialist
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a 
            href="#contact" 
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Get in Touch
          </motion.a>
          <motion.a 
            href="https://github.com/DurvankGade" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white/30 hover:border-white/60 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            View Projects
          </motion.a>
          <motion.a 
            href="https://drive.google.com/file/d/1LP8Oc9L5zxLD-AShe4XLKDWKtQ_RukKn/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            📄 Download Resume
          </motion.a>
        </div>
        {/* Scroll Indicator */}
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1 }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
