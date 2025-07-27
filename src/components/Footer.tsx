const Footer = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/DurvankGade", icon: "🐙" },
    { name: "LinkedIn", url: "https://linkedin.com/in/durvankgade", icon: "💼" },
    { name: "Phone", url: "tel:+919876543210", icon: "📱" },
    { name: "Email", url: "mailto:durvankgade@gmail.com", icon: "📧" }
  ];

  return (
    <footer className="bg-slate-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Durvank Gade</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI/ML Specialist and Full-Stack Developer passionate about building intelligent solutions 
              that make a difference in the world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:durvankgade@gmail.com" className="hover:text-white transition-colors">
                  durvankgade@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>Chennai, Tamil Nadu, India</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🎓</span>
                <span>VIT Chennai</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 Durvank Gade. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span>↑</span>
            <span>Back to Top</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
