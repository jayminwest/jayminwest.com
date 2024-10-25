import React from "react";

const prompts = [
  "Tell me about your background",
  "What technologies do you work with?",
  "Show me some of your projects",
];

interface Props {
  onSelectPrompt: (prompt: string) => void;
  className?: string;
}

export const PromptSelector: React.FC<Props> = (
  { onSelectPrompt, className = "" },
) => {
  const handleClick = (prompt: string) => (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any default behavior
    onSelectPrompt(prompt);
  };

  return (
    <div className={`flex flex-col gap-2 p-6 ${className}`}>
      {prompts.map((prompt, index) => (
        <button
          key={index}
          onClick={handleClick(prompt)}
          className="text-left p-3 rounded-lg 
            bg-black/40 hover:bg-black/60 
            backdrop-blur-sm
            transition-all duration-200 
            border border-white/10 hover:border-white/20
            text-white/90 hover:text-white"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};
