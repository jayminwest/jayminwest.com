import React from "react";

type ChatMessageProps = {
  type: "bot" | "user";
  content: string;
};

export function ChatMessage({ type, content }: ChatMessageProps) {
  return (
    <div className="font-mono text-xs">
      {type === "user"
        ? (
          <div className="text-emerald-300">
            <span className="opacity-70">{">"}</span> {content}
          </div>
        )
        : (
          <div className="text-white/90 whitespace-pre-wrap leading-relaxed">
            {content}
          </div>
        )}
    </div>
  );
}
