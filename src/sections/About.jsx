import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write readable, maintainable, and efficient code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "I focus on building systems that are fast, reliable, and optimized for real-world use.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "I value teamwork and clear communication, contributing effectively to shared goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "I enjoy exploring new technologies and approaches to create smarter, scalable solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foregrounf text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foregrounf">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                a line of code at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a backend developer passionate about building reliable and
                maintainable systems. I enjoy exploring how logic, data, and
                software architecture come together to solve complex, real-world
                problems. Writing clean, efficient code and understanding the
                full lifecycle of software is at the core of my approach.
              </p>
              <p>
                I am continuously learning and improving my skills in Python and
                Rust, focusing on performance, scalability, and robustness. I
                also have a keen interest in Brain-Computer Interfaces (BCI),
                exploring how cutting-edge technology can bridge the gap between
                human cognition and software systems.
              </p>
              <p>
                Collaboration is central to my work: I thrive in team
                environments, value clear communication, and enjoy contributing
                to projects where creativity, innovation, and problem-solving
                are encouraged. My goal is to create software that is not only
                functional but also meaningful and impactful.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animatio-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to push the boundaries of what technology can
                achieve, turning ambitious ideas into transformative solutions
                that empower people and reshape the way we interact with
                information and systems. I strive to combine creativity,
                insight, and emerging technologies to create software with
                lasting impact and real-world significance."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{animationDelay: `${(idx + 1) * 100 }ms`}}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
