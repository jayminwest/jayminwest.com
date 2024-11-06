import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Mail, Check, Clipboard } from "lucide-react";

const titles = [
  "Founder @ Teach Niche",
  "Full Stack Developer",
  "AI Automation Specialist",
  "Founder @ TandemFlow",
  "Freelance Software Developer",
  "Outdoor Professional",
];

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const navigateTitle = useCallback((direction: 'next' | 'prev') => {
    setIsAnimating(true);
    setAutoPlay(false);

    setTimeout(() => {
      setCurrentTitleIndex(prevIndex => {
        if (direction === 'next') {
          return (prevIndex + 1) % titles.length;
        } else {
          return prevIndex === 0 ? titles.length - 1 : prevIndex - 1;
        }
      });
      setIsAnimating(false);
      setTimeout(() => setAutoPlay(true), 5000);
    }, 500);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jayminwest@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleViewProjects = () => {
    const companiesSection = document.querySelector('.companies-section');
    if (companiesSection) {
      companiesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      navigateTitle('next');
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay, navigateTitle]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Jaymin West
        </h1>
        <div className="h-20 flex flex-col items-center justify-center relative">
          {/* Navigation Arrows - Updated for better mobile experience */}
          <div className="absolute inset-x-0 flex justify-between items-center px-2 md:px-0">
            <button 
              onClick={() => navigateTitle('prev')}
              className="md:-translate-x-12 p-2 text-white/50 hover:text-emerald-400 
                       transition-colors focus:outline-none focus:ring-2 
                       focus:ring-emerald-400/50 rounded-full
                       hover:bg-black/20 active:bg-black/30"
              aria-label="Previous title"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <button 
              onClick={() => navigateTitle('next')}
              className="md:translate-x-12 p-2 text-white/50 hover:text-emerald-400 
                       transition-colors focus:outline-none focus:ring-2 
                       focus:ring-emerald-400/50 rounded-full
                       hover:bg-black/20 active:bg-black/30"
              aria-label="Next title"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Title */}
          <p 
            className={`text-lg md:text-2xl text-emerald-400 transition-all duration-500 transform
                       px-8 md:px-0 max-w-[280px] md:max-w-none
              ${isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}
          >
            {titles[currentTitleIndex]}
          </p>
          
          {/* Title progression dots */}
          <div className="flex gap-1.5 md:gap-2 mt-4">
            {titles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index !== currentTitleIndex) {
                    setIsAnimating(true);
                    setAutoPlay(false);
                    setTimeout(() => {
                      setCurrentTitleIndex(index);
                      setIsAnimating(false);
                      setTimeout(() => setAutoPlay(true), 5000);
                    }, 500);
                  }
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer
                  ${index === currentTitleIndex 
                    ? 'bg-emerald-400 w-3' 
                    : 'bg-white/30 hover:bg-white/50'}`}
                aria-label={`Go to title ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="text-base md:text-lg text-white/80 mt-6 px-4 md:px-0">
          Building innovative solutions at the intersection of technology and business
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 px-4 md:px-0">
          <button 
            onClick={handleViewProjects}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors
                     w-full md:w-auto"
          >
            View Projects
          </button>
          <button
            onClick={showEmail ? handleCopyEmail : () => setShowEmail(true)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 
                     bg-black/30 hover:bg-black/40 text-white border border-white/10 
                     rounded-lg transition-all w-full md:w-auto"
          >
            <Mail className="w-4 h-4" />
            {showEmail ? (
              <>
                <span className="text-sm md:text-base">jayminwest@gmail.com</span>
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Clipboard className="w-4 h-4" />
                )}
              </>
            ) : (
              <span>Contact/Hire Me</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
} 