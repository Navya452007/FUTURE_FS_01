import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Abstract gradient bg */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full glow-circle animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/6 w-[500px] h-[500px] rounded-full glow-circle animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="section-label mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Software Developer · Full Stack Engineer
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Jettiboina<br />
          <span className="gradient-text-accent">Navya Sri</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Building scalable systems. Delivering clean and efficient digital solutions.
        </p>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Computer Science Engineering student focused on developing reliable web applications and solving real-world problems using modern technologies.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 glass-card text-foreground font-semibold text-sm rounded-lg hover:bg-muted transition-colors">
            Contact
          </a>
          <a href="https://github.com/Navya452007" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-lg hover:bg-muted transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/navya-sri-jettiboina-540705332" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-lg hover:bg-muted transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://leetcode.com/u/navyasri_jettiboina/" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-lg hover:bg-muted transition-colors text-xs font-bold">
            LC
          </a>
        </div>

        <a href="#about" className="inline-block mt-16 text-muted-foreground animate-bounce">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
