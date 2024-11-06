import React from "react";
import { Code2, Workflow, Lightbulb, Mountain, Bot, Palette } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-8 h-8 text-emerald-400" />,
    title: "Full Stack Development",
    description: "Building modern web applications with React.js, Supabase, and Node.js. Specializing in community-driven platforms and marketplace solutions.",
  },
  {
    icon: <Bot className="w-8 h-8 text-emerald-400" />,
    title: "AI & Automation",
    description: "Creating efficient automation solutions with Make.com, Python, and LLMs. Focused on streamlining workflows for outdoor education and seasonal work.",
  },
  {
    icon: <Workflow className="w-8 h-8 text-emerald-400" />,
    title: "Business Automation",
    description: "Developing custom automation solutions through TandemFlow, helping small to medium businesses optimize their operations and hiring processes.",
  },
];

export function Services() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Services I Offer
      </h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
        Specializing in automation solutions and full-stack development, with a unique focus on 
        outdoor education and community-driven platforms.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 
                     hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1"
          >
            <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg 
                          bg-emerald-500/10 border border-emerald-500/20">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-white/70">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 