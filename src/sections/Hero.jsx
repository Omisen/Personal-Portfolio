import { useState } from "react";
import { Button } from "../components/Button";

export const Hero = () => {
  {
    /* Genera le posizioni una sola volta al mount usando la funzione lazy di useState */
  }
  const [dots] = useState(() =>
    Array(30)
      .fill(null)
      .map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${15 + Math.random() * 20}s`,
        animationDelay: `${Math.random() * 5}s`,
      }))
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Animated Cursor */}
      

      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.animationDuration} ease-in-out infinite`,
              animationDelay: dot.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-4 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Developer • Python Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experience with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Simone Conzo - a software developer currently
                specializing in Python and learning Rust, who enjoys turning
                ideas into reliable backend systems and focused on writing
                clean, maintainable code.
              </p>
            </div>

            {/* CTAs */}
            <div>
              <Button size="lg">Contact Me</Button>
              <button></button>
            </div>
          </div>
          {/* Right Column - Profile Pic*/}
        </div>
      </div>
    </section>
  );
};
