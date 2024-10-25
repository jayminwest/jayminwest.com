import React, { useEffect, useRef, useState } from "react";
import { ChatMessage } from "./components/ChatMessage";
import { ChatInput } from "./components/ChatInput";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { getChatCompletion } from "./lib/openai";
import { getBackgroundTheme } from "./lib/colors";
import type { Message } from "./lib/types";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { PromptSelector } from "./components/PromptSelector";
import { ChevronDown } from "lucide-react";

const INITIAL_MESSAGE = import.meta.env.VITE_OPENAI_API_KEY
  ? "Welcome. What would you like to know about me?\n"
  : "⚠️ OpenAI API key not configured. Please add your API key to the .env file as VITE_OPENAI_API_KEY to enable AI responses.\n\nOnce configured, refresh the page to start chatting.";

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", content: INITIAL_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const backgroundTheme = getBackgroundTheme(input);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSend = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (!input.trim() || isLoading) return;

    // Prevent default form submission
    event?.preventDefault?.();

    const userMessage = { type: "user", content: input } as Message;
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await getChatCompletion(input);
      setMessages((prev) => [...prev, { type: "bot", content: response }]);
    } catch (error) {
      const errorMessage = error instanceof Error
        ? error.message
        : "Unknown error occurred";
      setMessages((prev) => [...prev, {
        type: "bot",
        content: `Error: Unable to generate response. ${errorMessage}`,
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptSelect = (prompt: string) => {
    if (isLoading) return;
    
    // Instead of calling handleSend directly, set the input and use setTimeout
    setInput(prompt);
    setTimeout(() => {
      const fakeEvent = new Event('submit') as unknown as React.FormEvent<HTMLFormElement>;
      handleSend(fakeEvent);
    }, 0);
  };

  return (
    <div className="min-h-screen">
      <AnimatedBackground currentTheme={input ? backgroundTheme : undefined}>
        <div className="relative">
          <Header />
          {/* Chat Section */}
          <section className="min-h-screen">
            <main className="container mx-auto flex flex-col items-center justify-center p-4">
              <div className="w-full max-w-[800px] flex flex-col gap-6">
                {/* Site Title */}
                <h1 className="text-white/90 text-2xl font-mono text-center">
                  Jaymin West
                </h1>

                {/* Chat Interface */}
                <div className="bg-black/40 backdrop-blur-lg rounded-lg flex flex-col h-[400px]">
                  {/* Messages Container */}
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-2">
                      {messages.map((message, index) => (
                        <ChatMessage
                          key={index}
                          type={message.type}
                          content={message.content}
                        />
                      ))}
                      {isLoading && (
                        <div className="text-emerald-300/50 text-xs font-mono animate-pulse">
                          Processing...
                        </div>
                      )}
                      <div ref={chatEndRef} />
                    </div>
                  </div>
                  {/* Input Section */}
                  <div className="flex-shrink-0">
                    <ChatInput
                      input={input}
                      setInput={setInput}
                      handleSend={handleSend}
                      isLoading={isLoading}
                    />
                  </div>
                </div>

                {/* Prompt Selector */}
                <div className="bg-black/40 backdrop-blur-lg rounded-lg">
                  <PromptSelector
                    onSelectPrompt={handlePromptSelect}
                  />
                </div>

                {/* Down Arrow */}
                <div className="flex justify-center">
                  <ChevronDown 
                    size={24} 
                    className="text-white/50 animate-bounce" 
                  />
                </div>
              </div>
            </main>
          </section>

          {/* About Me Section */}
          <section ref={aboutMeRef}>
            <AboutMe />
          </section>
        </div>
      </AnimatedBackground>
    </div>
  );
}

export default App;
