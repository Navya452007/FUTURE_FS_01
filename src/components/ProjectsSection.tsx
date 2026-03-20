import { ExternalLink, Trophy, Shield, Cpu } from "lucide-react";

const projects = [
  {
    title: "Movie Ticket Booking System",
    description: "Desktop-based application for booking movie tickets with seat selection.",
    tech: ["Java", "Swing"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
  },
  {
    title: "Shopping Mall Website",
    description: "Responsive website showcasing products and categories.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
  },
  {
    title: "Photography Portfolio Website",
    description: "Gallery-based website with smooth navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
  },
  {
    title: "Nike Clone Website",
    description: "Frontend clone focusing on layout and responsiveness.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
  },
];

const sihProject = {
  title: "Centralized Vulnerability Detection System",
  description:
    "A comprehensive cybersecurity platform designed for centralized vulnerability detection and analysis across multiple systems. Built as part of the prestigious Smart India Hackathon — India's largest open innovation model bringing students, organizations, and government together to solve real-world challenges.",
  tech: ["Python", "Machine Learning", "SQL", "Data Analysis", "Cybersecurity"],
  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  highlights: [
    { icon: Trophy, text: "Smart India Hackathon Project" },
    { icon: Shield, text: "Cybersecurity & Threat Analysis" },
    { icon: Cpu, text: "ML-Powered Detection Engine" },
  ],
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Projects</p>
        <h2 className="section-heading mb-12">
          Things I've <span className="gradient-text-accent">built.</span>
        </h2>

        {/* SIH Featured Project */}
        <div className="mb-12 sih-featured-card rounded-2xl overflow-hidden hover-lift group relative">
          <div className="absolute inset-0 rounded-2xl sih-glow-border pointer-events-none z-10" />
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
              <img
                src={sihProject.image}
                alt={sihProject.title}
                loading="lazy"
                className="w-full h-full object-cover project-image-zoom group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:hidden" />
            </div>
            <div className="p-8 flex flex-col justify-center relative z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-4 w-fit sih-badge-pulse">
                <Trophy size={14} />
                Featured — Smart India Hackathon
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
                {sihProject.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {sihProject.description}
              </p>

              <div className="flex flex-col gap-2 mb-5">
                {sihProject.highlights.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5 text-sm text-secondary-foreground">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-primary" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {sihProject.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <a
                href="https://github.com/Navya452007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity w-fit"
              >
                View on GitHub <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project) => (
            <div key={project.title} className="glass-card rounded-xl overflow-hidden hover-lift group">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover project-image-zoom group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2 text-sm">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag text-[10px]">{t}</span>
                  ))}
                </div>
                <a
                  href="https://github.com/Navya452007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                >
                  View on GitHub <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
