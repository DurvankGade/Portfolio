import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Lead of Data Science Department",
    org: "IEEE Robotics and Automation Society",
    date: "Feb 2024 – Present",
    desc: "Leading ML projects and initiatives, speaker at DataDash 2.0, organized national hackathons, mentoring students in AI/ML technologies.",
    achievements: ["Led 5+ ML workshops", "Organized national hackathons", "Speaker at DataDash 2.0"]
  },
  {
    role: "AI Intern",
    org: "FlyBrand Digital Solutions",
    date: "Jun – Jul 2024",
    desc: "Built AI content for mechanical engineering and outreach initiatives, developed educational AI tools and content.",
    achievements: ["Developed AI educational content", "Created outreach materials", "Enhanced brand digital presence"]
  },
  {
    role: "Design Member",
    org: "NSCC (Newton School Coding Club)",
    date: "Sept 2024 – Present",
    desc: "Created educational designs and student content, contributed to club's visual identity and educational materials.",
    achievements: ["Designed educational materials", "Created student content", "Enhanced club branding"]
  }
];

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "VIT Chennai",
    date: "2022 - 2026",
    gpa: "8.85 CGPA",
    highlights: ["AI/ML Specialization", "Data Science Focus", "Active in Technical Clubs"]
  }
];

const certifications = [
  {
    name: "Supervised Machine Learning: Regression",
    issuer: "IBM",
    date: "2024",
    credential: "Deep Learning, Neural Networks, LSTMS, GRUs, GANs, Computer Vision"
  },
  {
    name: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    date: "2024",
    credential: "Data Cleaning and Preprocessing, Exploratory Data Analysis, Feature Engineering, Model Training and Evaluation"
  },
  {
    name: "Business Analytics & Text Mining Modeling using Python",
    issuer: "NPTEL",
    date: "2024",
    credential: "Text mining, Data Analysis, Python Programming"
  },
  {
    name: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credential: "Statistics and Probability, EDA Basics, Hypothesis Testing, Ethics in AI, Evaluation metrics"
  }
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="bg-slate-800 text-white py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experience & Education</h2>
        {/* Work Experience */}
        <motion.div className="mb-16" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          <h3 className="text-3xl font-semibold mb-8 text-center text-blue-400">Work Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="card hover:scale-105"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-semibold text-white">{exp.role}</h4>
                    <p className="text-lg text-blue-300">{exp.org}</p>
                  </div>
                  <span className="text-sm text-gray-400 bg-slate-600 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.date}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:scale-110 transition-transform cursor-pointer"
                      whileHover={{ scale: 1.12 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {achievement}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <h3 className="text-3xl font-semibold mb-8 text-center text-purple-400">Education</h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-white">{edu.degree}</h4>
                      <p className="text-lg text-purple-300">{edu.school}</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-slate-600 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {edu.date}
                    </span>
                  </div>
                  <p className="text-green-400 font-semibold mb-4">{edu.gpa}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:scale-110 transition-transform cursor-pointer"
                        whileHover={{ scale: 1.12 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Certifications */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
            <h3 className="text-3xl font-semibold mb-8 text-center text-green-400">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-white">{cert.name}</h4>
                      <p className="text-green-300">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-slate-600 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{cert.credential}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Key Achievements */}
        <motion.div className="mt-16 card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
          <h3 className="text-3xl font-semibold mb-8 text-center text-pink-400">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold mb-2">IIT Bombay Winner</h4>
              <p className="text-gray-400 text-sm">1st Prize in National Hackathon</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold mb-2">IEEE RAS Lead</h4>
              <p className="text-gray-400 text-sm">Data Science Leadership Role</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold mb-2">8.85 CGPA</h4>
              <p className="text-gray-400 text-sm">Academic Excellence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold mb-2">5+ Projects</h4>
              <p className="text-gray-400 text-sm">AI/ML Solutions Deployed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
