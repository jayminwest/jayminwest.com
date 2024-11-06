import React from "react";
import { ExternalLink, ChevronDown } from "lucide-react";

const companies = [
  {
    name: "Teach Niche",
    role: "Founder",
    description: "A platform designed to empower the kendama community by providing a space where players can share knowledge, teach skills, and support one another.",
    image: "/teach-niche-homepage.png",
    url: "https://teach-niche.com"
  },
  {
    name: "TandemFlow",
    role: "Founder",
    description: "AI Automation Agency specializing in workflow optimization and automated hiring solutions for outdoor education and seasonal work.",
    image: "/tandemflow-homepage.png",
    url: "https://tandemflow.ai"
  },
];

export function Companies() {
  const handleScrollDown = () => {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 companies-section">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Current Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 
                     hover:border-white/20 transition-colors group"
          >
            <a 
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg mb-4 group-hover:ring-2 
                       ring-emerald-400/30 transition-all"
            >
              <div className="relative pb-[56.25%] bg-black/50">
                <img
                  src={company.image}
                  alt={`${company.name} homepage`}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg 
                           transform transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x400/1a1a1a/313131?text=Screenshot+Coming+Soon";
                  }}
                />
              </div>
            </a>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{company.name}</h3>
              <span className="text-emerald-400 text-sm px-3 py-1 rounded-full border border-emerald-400/30">
                {company.role}
              </span>
            </div>
            <p className="text-white/70 mb-4">{company.description}</p>
            
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 
                       hover:bg-emerald-500/20 text-emerald-400 rounded-lg border 
                       border-emerald-500/20 hover:border-emerald-500/30 
                       transition-all duration-200 group-hover:border-emerald-500/50"
              aria-label={`Visit ${company.name} website`}
            >
              <span>Visit Site</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col items-center mt-24 mb-8 animate-bounce">
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-2 text-white/50 hover:text-emerald-400 transition-colors"
          aria-label="Scroll to see more"
        >
          <span className="text-sm font-mono">scroll for more</span>
          <ChevronDown className="w-5 h-5 group-hover:transform group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
} 