const projects = [
  {
    title: "Omnipresence – Women's Safety Ecosystem",
    description: `
      🏆 1st Prize @ IIT Bombay Hackathon · Built a multi-module AI safety platform.
      - Developed scream-detection model for instant SOS trigger using real-time audio analysis.
      - Integrated safe route mapping using risk-indexed geolocation paths.
      - Implemented real-time CCTV threat detection pipeline with OpenCV & YOLO.
    `,
    technologies: ["Python", "OpenCV", "YOLO", "TensorFlow", "React", "Firebase"],
    image: "🛡️",
    category: "AI/ML"
  },
  {
    title: "LiveScope – AI-Powered EdTech Toolkit",
    description: `
      🏆 Winner @ Scribble Pad Hackathon · Created an intelligent classroom toolkit.
      - Attention tracking using face detection and computer vision.
      - PDF-to-quiz generator using NLP for automated assessment creation.
      - Peer-to-peer file sharing built using WebRTC and Firebase (serverless).
    `,
    technologies: ["Python", "OpenCV", "NLP", "WebRTC", "React", "Firebase"],
    image: "🎓",
    category: "EdTech"
  },
  {
    title: "Satellite-to-Map Translation with Pix2Pix GAN",
    description: `
      - Built a deep learning pipeline using conditional GAN (Pix2Pix).
      - Trained on paired satellite and map datasets to generate accurate translations.
      - Framework supports aerial-to-map, sketch-to-photo, and can be retrained on custom datasets.
    `,
    technologies: ["Python", "PyTorch", "GAN", "Computer Vision", "Deep Learning"],
    image: "🛰️",
    category: "Computer Vision"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          A collection of innovative projects showcasing expertise in AI/ML, computer vision, 
          and full-stack development. Each project demonstrates real-world problem-solving 
          and cutting-edge technology implementation.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <div key={i} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:transform hover:scale-105">
              {/* Project Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-3xl">
                  {proj.image}
                </div>
                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-gray-300">
                  {proj.category}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors">
                {proj.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-300 mb-6 leading-relaxed whitespace-pre-line">
                {proj.description}
              </p>

              {/* Technologies Used */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-700/50 border border-slate-600 rounded text-xs text-gray-300 hover:bg-slate-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-semibold mb-4 text-white">View All Projects</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Explore more of my projects and contributions on GitHub.
            </p>
            <a 
              href="https://github.com/DurvankGade" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View on GitHub
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
