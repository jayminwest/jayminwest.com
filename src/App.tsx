import React, { useRef } from "react";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Hero } from "./components/Hero";
import { Companies } from "./components/Companies";
import { Services } from "./components/Services";

function App() {
  const aboutMeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen">
      <AnimatedBackground>
        <div className="relative">
          <Header />
          {/* Hero Section */}
          <section className="min-h-screen">
            <Hero />
          </section>

          {/* Companies Section */}
          <section className="py-24">
            <Companies />
          </section>

          {/* Services Section */}
          <section className="py-24 bg-black/20">
            <Services />
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
