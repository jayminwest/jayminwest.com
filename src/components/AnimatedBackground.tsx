import React, { useEffect, useState } from "react";

const backgrounds = [
  "from-slate-900 to-blue-950",
  "from-slate-900 to-emerald-950",
  "from-slate-900 to-rose-950",
  "from-slate-900 to-violet-950",
  "from-slate-900 to-cyan-950",
  "from-slate-900 to-amber-950",
];

interface Props {
  currentTheme?: string;
  children: React.ReactNode;
}

export const AnimatedBackground: React.FC<Props> = (
  { currentTheme, children },
) => {
  const [currentBg, setCurrentBg] = useState(backgrounds[0]);
  const [nextBg, setNextBg] = useState(backgrounds[1]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (currentTheme) return; // Don't animate if there's a current theme

    const transitionDuration = 5000; // 5 seconds for fade
    const holdDuration = 8000; // 8 seconds between fades

    const animate = () => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentBg(nextBg);
        setIsTransitioning(false);

        const currentIndex = backgrounds.indexOf(nextBg);
        const nextIndex = (currentIndex + 1) % backgrounds.length;
        setNextBg(backgrounds[nextIndex]);
      }, transitionDuration);
    };

    const interval = setInterval(() => {
      animate();
    }, transitionDuration + holdDuration);

    // Start first animation
    animate();

    return () => clearInterval(interval);
  }, [currentTheme, nextBg]);

  return (
    <div className="relative w-full h-full">
      {/* Base background - always visible */}
      <div className="fixed inset-0 bg-slate-900" />

      {/* Current background */}
      <div
        className={`fixed inset-0 bg-gradient-to-b ${currentBg} transition-opacity duration-[5000ms] ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Next background */}
      <div
        className={`fixed inset-0 bg-gradient-to-b ${nextBg} transition-opacity duration-[5000ms] ease-in-out ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Content */}
      <div className="relative h-full">{children}</div>
    </div>
  );
};
