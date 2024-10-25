import React, { useState } from "react";
import {
  Check,
  Clipboard,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";

export function Header() {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownloadResume = () => {
    const resumeUrl = "/resume.txt";
    window.open(resumeUrl, "_blank");
  };

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
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleLinkedIn = () => {
    // Replace with your LinkedIn profile URL
    window.open("https://www.linkedin.com/in/jaymin-west/", "_blank");
  };

  return (
    <div className="w-full bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Terminal size={16} className="text-emerald-300" />
          <span className="text-xs text-white/70 font-mono tracking-wider">
            Jaymin West
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <button
              onClick={showEmail ? handleCopyEmail : handleEmail}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors duration-200"
              aria-label={showEmail ? "Copy email to clipboard" : "Show email"}
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
          </div>

          <button
            onClick={handleGithub}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors duration-200"
            aria-label="Visit GitHub profile"
          >
            <Github size={14} className="text-emerald-300" />
            <span className="text-xs text-emerald-300 font-mono hidden sm:inline">
              github
            </span>
          </button>

          <button
            onClick={handleLinkedIn}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors duration-200"
            aria-label="Visit LinkedIn profile"
          >
            <Linkedin size={14} className="text-emerald-300" />
            <span className="text-xs text-emerald-300 font-mono hidden sm:inline">
              linkedin
            </span>
          </button>

          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors duration-200"
            aria-label="Download resume"
          >
            <FileDown size={14} className="text-emerald-300" />
            <span className="text-xs text-emerald-300 font-mono">
              resume.txt
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
