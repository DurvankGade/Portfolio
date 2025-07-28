import { motion } from 'framer-motion';

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/DurvankGade",
      icon: "🐙",
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/durvankgade",
      icon: "💼",
      color: "hover:text-blue-400"
    },
    {
      name: "Phone",
      url: "tel:+919404763853",
      icon: "📱",
      color: "hover:text-green-400"
    },
    {
      name: "Email",
      url: "mailto:durvankgade@gmail.com",
      icon: "📧",
      color: "hover:text-red-400"
    }
  ];

  return (
    <motion.section
      id="contact"
      className="bg-black text-white py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <motion.p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          I'm always interested in hearing about new opportunities, interesting projects, or just having a chat about technology and innovation. Feel free to reach out!
        </motion.p>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div className="card" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full p-4 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="w-full p-4 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="What's this about?" 
                  className="w-full p-4 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  placeholder="Tell me about your project or opportunity..." 
                  rows={6} 
                  className="w-full p-4 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          {/* Contact Information */}
          <motion.div className="space-y-8" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
            {/* Direct Contact */}
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:durvankgade@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      durvankgade@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a href="tel:+919876543210" className="text-green-400 hover:text-green-300 transition-colors">
                      +91 9404763853
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-300">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🎓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Education</p>
                    <p className="text-gray-300">VIT Chennai</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 bg-slate-700/50 border border-slate-600 rounded-lg hover:border-slate-500 transition-all duration-300 group ${social.color}`}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-semibold text-white group-hover:scale-105 transition-transform">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
            {/* Quick Stats */}
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 text-pink-400">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">3</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">2</div>
                  <div className="text-sm text-gray-400">Hackathon Wins</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">8.85</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
