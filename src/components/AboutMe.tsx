import React from 'react';
import { Code2, Mountain, Camera, BookOpen, Github, ExternalLink } from 'lucide-react';
import { Footer } from './Footer';

export function AboutMe() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white mb-6">My Overview:</h2>
            <p className="text-slate-300 leading-relaxed">
            I’m Jaymin West — an engineer, developer, and outdoor professional with a passion for creating impactful projects. 
            From building NCAA basketball prediction models and a kendama tutorial platforms to guiding backpacking trips, I love combining tech and 
            community in meaningful ways. When I’m not coding or analyzing, you’ll find me exploring the outdoors, 
            reading something good, or playing kendama.
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
              <li>• Full-stack Development</li>
              <li>• React & Node.js Expertise</li>
              <li>• Machine Learning</li>
              <li>• Large Language Models</li>
              <li>• Data Analysis</li>
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
              Whenever I can, I love to explore the world and spend time outdoors. 
            </p>
          </div>
        </div>

        {/* Projects */}
        <div>
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
                  A platform designed to empower the kendama community by providing a space 
                  where players can share knowledge, teach skills, and support one another. 
                  Built with React, Supabase, and Stripe integration.
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
