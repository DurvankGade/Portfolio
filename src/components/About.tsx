const About = () => {
  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
    "AI/ML & Data Science": ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    "Web Development": ["React", "Node.js", "Express.js", "Flask", "HTML5", "CSS3", "Tailwind CSS"],
    "Databases & Cloud": ["MongoDB", "PostgreSQL", "Firebase", "AWS", "Docker", "Git"],
    "Tools & Technologies": ["Jupyter Notebook", "Google Colab", "VS Code", "Postman", "Figma", "Adobe Creative Suite"]
  };

  return (
    <section id="about" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Computer Science undergraduate at VIT Chennai with a strong focus on AI/ML and full-stack development. 
                With a CGPA of 8.85, I bring end-to-end data science expertise — from data cleaning and modeling to building 
                computer vision pipelines and deploying scalable ML systems.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I've led national hackathon-winning projects and delivered AI solutions in healthcare, education, and safety domains. 
                My work spans from developing real-time threat detection systems to creating intelligent educational tools.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently serving as the Data Science Lead at IEEE Robotics and Automation Society, I'm passionate about 
                mentoring others and contributing to the AI/ML community through workshops and technical sessions.
              </p>
            </div>

            {/* Education & Achievements */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Education & Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-400">🎓</span>
                  <span className="text-gray-300">B.Tech Computer Science, VIT Chennai (CGPA: 8.85)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400">🏆</span>
                  <span className="text-gray-300">1st Prize - IIT Bombay Hackathon 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">🏆</span>
                  <span className="text-gray-300">Winner - Scribble Pad Hackathon 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">🎯</span>
                  <span className="text-gray-300">Lead of Data Science Department - IEEE RAS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-center text-green-400">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h4 className="text-lg font-semibold mb-3 text-gray-200">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:scale-105 transition-transform"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Strengths */}
        <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
          <h3 className="text-2xl font-semibold mb-6 text-center text-pink-400">Key Strengths</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="font-semibold mb-2">AI/ML Expertise</h4>
              <p className="text-gray-400 text-sm">Deep learning, computer vision, NLP, and end-to-end ML pipeline development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="font-semibold mb-2">Full-Stack Development</h4>
              <p className="text-gray-400 text-sm">Modern web applications with React, Node.js, and cloud deployment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold mb-2">Problem Solving</h4>
              <p className="text-gray-400 text-sm">Hackathon winner with proven track record of innovative solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
