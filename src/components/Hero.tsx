const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
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
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse"></div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Durvank Gade
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
          AI/ML Specialist
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          CS Undergrad at VIT Chennai | IIT Bombay Hackathon Winner | Lead of Data Science Department at IEEE RAS | 
          Building intelligent solutions with Python, React, and cutting-edge AI technologies
        </p>

        {/* Key Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
            🏆 IIT Bombay Hackathon Winner
          </span>
          <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
            🧠 AI/ML Specialist
          </span>
          <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
            📊 IEEE RAS Data Science Lead
          </span>

        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
          <a 
            href="https://github.com/DurvankGade" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white/30 hover:border-white/60 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
          <a 
            href="https://drive.google.com/file/d/1LP8Oc9L5zxLD-AShe4XLKDWKtQ_RukKn/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
