import React, { useState } from "react";
import {
  Check,
  Clipboard,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Menu,
  X
} from "lucide-react";

export function Header() {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGithub = () => {
    window.open("https://github.com/jayminwest", "_blank");
  };

  const handleEmail = () => {
    setShowEmail(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jayminwest@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/jaymin-west/", "_blank");
  };

  const handleViewProjects = () => {
    const companiesSection = document.querySelector('.companies-section');
    if (companiesSection) {
      companiesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Desktop and Mobile Layout */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Terminal size={16} className="text-emerald-300" />
            <span className="text-xs text-white/70 font-mono tracking-wider">
              Jaymin West
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleViewProjects}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors duration-200"
            >
              <span className="text-xs text-emerald-300 font-mono">
                projects
              </span>
            </button>

            <button
              onClick={showEmail ? handleCopyEmail : handleEmail}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors duration-200"
            >
              <Mail size={14} className="text-emerald-300" />
              <span className="text-xs text-emerald-300 font-mono">
                {showEmail ? "jayminwest@gmail.com" : "email"}
              </span>
              {showEmail && (
                <span className="ml-1">
                  {copied
                    ? <Check size={14} className="text-emerald-300" />
                    : <Clipboard size={14} className="text-emerald-300" />}
                </span>
              )}
            </button>

            <button
              onClick={handleGithub}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors duration-200"
            >
              <Github size={14} className="text-emerald-300" />
              <span className="text-xs text-emerald-300 font-mono">
                github
              </span>
            </button>

            <button
              onClick={handleLinkedIn}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors duration-200"
            >
              <Linkedin size={14} className="text-emerald-300" />
              <span className="text-xs text-emerald-300 font-mono">
                linkedin
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20"
          >
            {isMenuOpen ? (
              <X size={20} className="text-emerald-300" />
            ) : (
              <Menu size={20} className="text-emerald-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-2">
            <button
              onClick={handleViewProjects}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors duration-200"
            >
              <span className="text-xs text-emerald-300 font-mono">
                projects
              </span>
            </button>

            <button
              onClick={showEmail ? handleCopyEmail : handleEmail}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors duration-200"
            >
              <Mail size={14} className="text-emerald-300" />
              <span className="text-xs text-emerald-300 font-mono">
                {showEmail ? "jayminwest@gmail.com" : "email"}
              </span>
              {showEmail && (
                <span className="ml-1">
                  {copied
                    ? <Check size={14} className="text-emerald-300" />
                    : <Clipboard size={14} className="text-emerald-300" />}
                </span>
              )}
            </button>

            <button
              onClick={handleGithub}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors duration-200"
            >
              <Github size={14} className="text-emerald-300" />
              <span className="text-xs text-emerald-300 font-mono">
                github
              </span>
            </button>

            <button
              onClick={handleLinkedIn}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors duration-200"
            >
              <Linkedin size={14} className="text-emerald-300" />
              <span className="text-xs text-emerald-300 font-mono">
                linkedin
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
