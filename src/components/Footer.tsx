import React, { useState } from "react";
import { Github, Linkedin, Mail, Check, Clipboard } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jayminwest@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <footer className="mt-24 border-t border-white/10 pt-12 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/jayminwest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <button
              onClick={showEmail ? handleCopyEmail : () => setShowEmail(true)}
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
              aria-label={showEmail ? "Copy email" : "Show email"}
            >
              <Mail size={20} />
              {showEmail && (
                <>
                  <span className="text-sm ml-1">jayminwest@gmail.com</span>
                  {copied ? (
                    <Check size={16} className="ml-1" />
                  ) : (
                    <Clipboard size={16} className="ml-1" />
                  )}
                </>
              )}
            </button>
            <a
              href="https://www.linkedin.com/in/jaymin-west/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} Jaymin West. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
