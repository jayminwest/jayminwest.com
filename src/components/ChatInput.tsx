import React from "react";

interface Props {
  input: string;
  setInput: (input: string) => void;
  handleSend: (event?: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<Props> = ({
  input,
  setInput,
  handleSend,
  isLoading,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    handleSend(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      const fakeEvent = new Event('submit') as unknown as React.FormEvent<HTMLFormElement>;
      handleSend(fakeEvent);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          disabled={isLoading}
          rows={1}
          className="w-full bg-black/20 rounded px-4 py-2 text-white placeholder-white/50 
                     resize-none focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
        />
      </div>
    </form>
  );
};
