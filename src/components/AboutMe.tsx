import { Code2, Mountain, Github, ExternalLink, Mail, Check, Clipboard } from 'lucide-react';
import { Footer } from './Footer';
import { useState } from 'react';

export function AboutMe() {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jayminwest@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="py-24 px-4 about-section">
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white mb-6">My Overview:</h2>
            <p className="text-slate-300 leading-relaxed">
              I'm Jaymin West — a full-stack developer and outdoor enthusiast with a Computer Science degree from Gonzaga University. 
              I'm passionate about combining technology with community impact through projects like Teach Niche and TandemFlow. 
              When I'm not coding, you'll find me ski touring, backpacking, playing kendama, or exploring house music. 
              I believe in digital minimalism and creating efficient, community-driven solutions.
            </p>  
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Coding workspace"
              className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Skills & Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="text-emerald-400" size={24} />
              <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>• Full-stack Development (React.js, Node.js)</li>
              <li>• Database Solutions (Supabase, SQL)</li>
              <li>• AI & Automation (Python, LLMs, Make.com)</li>
              <li>• Workflow Automation & Integration</li>
              <li>• Payment Integration (Stripe)</li>
              <li>• Data Analysis & Predictive Modeling</li>
              <li>• UI/UX Design & Development</li>
              <li>• Version Control (Git)</li>
              <li>• API Development & Integration</li>
            </ul>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mountain className="text-emerald-400" size={24} />
              <h3 className="text-xl font-semibold text-white">Travel & Adventure</h3>
            </div>
            <img
              src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Mountain hiking"
              className="rounded-lg mb-4 hover:scale-105 transition-transform duration-500"
            />
            <p className="text-slate-300">
              From leading backcountry trips at Wilderness Adventures to teaching skiing at Schweitzer, 
              I'm passionate about outdoor education and adventure. My dream trip? Ski touring in Norway!
            </p>
          </div>
        </div>

        {/* Projects */}
        <div id="featured-projects">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Teach Niche Platform"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Teach Niche</h3>
                <p className="text-slate-300 mb-4">
                  An open-source, community-driven platform for kendama players to create, sell, and purchase tutorials. 
                  Built with React.js, Supabase, and Stripe integration. Launching around the North American Kendama Open (NAKO).
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/jayminwest/Teach-Niche" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </a>
                  <a 
                    href="https://teach-niche.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live Site</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="NCAA Game Predictions"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">NCAA Game Predictions</h3>
                <p className="text-slate-300 mb-4">
                  A machine learning model for predicting NCAA basketball game outcomes. 
                  Utilizes Python and Jupyter notebooks for data analysis and predictive modeling 
                  of college basketball games.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/jayminwest/NCAA-Game-Predictions" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* New GitHub button */}
          <div className="flex justify-center mt-12">
            <a
              href="https://github.com/jayminwest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black/30 hover:bg-black/40 
                       text-white border border-white/10 hover:border-white/20 rounded-lg 
                       transition-all duration-200"
              aria-label="View more projects on GitHub"
            >
              <Github className="w-5 h-5" />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you're interested in collaboration, have a project in mind, or just want to chat about tech and outdoor adventures, I'd love to hear from you.
          </p>
          <button
            onClick={showEmail ? handleCopyEmail : () => setShowEmail(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-black/30 hover:bg-black/40 
                     text-white border border-white/10 rounded-lg transition-all"
          >
            <Mail className="w-4 h-4" />
            {showEmail ? (
              <>
                <span>jayminwest@gmail.com</span>
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Clipboard className="w-4 h-4" />
                )}
              </>
            ) : (
              <span>Contact Me</span>
            )}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
