import { Code2, Brain, Sparkles, BookOpen } from "lucide-react";

const strengths = [
  { icon: Code2, label: "Full Stack Development" },
  { icon: Brain, label: "Problem Solving & DSA" },
  { icon: Sparkles, label: "Clean Coding" },
  { icon: BookOpen, label: "Continuous Learning" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">About Me</p>
        <h2 className="section-heading mb-10">
          Passionate about building<br />
          <span className="gradient-text-accent">meaningful software.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              I am a Computer Science Engineering student at Sri Vasavi Engineering College with a strong interest in full-stack development and problem solving.
            </p>
            <p>
              I enjoy building real-world applications that are efficient, scalable, and user-friendly. My technical focus includes Java, modern web technologies, and Data Structures & Algorithms.
            </p>
            <p>
              I continuously work on improving my coding skills through platforms like LeetCode and CodeChef. My goal is to become a skilled software engineer capable of designing scalable and impactful systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {strengths.map(({ icon: Icon, label }) => (
              <div key={label} className="glass-card rounded-xl p-5 hover-lift">
                <Icon size={22} className="text-primary mb-3" />
                <p className="text-sm font-medium text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
