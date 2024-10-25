import React from "react";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  onClick: () => void;
}

export function ScrollIndicator({ onClick }: ScrollIndicatorProps) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-all duration-300 animate-bounce group"
      aria-label="Scroll to About section"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-mono opacity-50 group-hover:opacity-100 transition-opacity">
          More about me
        </span>
        <ChevronDown size={24} />
      </div>
    </button>
  );
}
