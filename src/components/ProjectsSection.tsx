import { ExternalLink } from "lucide-react";

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
  {
    title: "Centralized Vulnerability Detection System",
    description: "Cybersecurity platform for vulnerability detection and analysis.",
    tech: ["Python", "Machine Learning", "SQL"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    badge: "🏆 Smart India Hackathon",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Projects</p>
        <h2 className="section-heading mb-12">
          Things I've <span className="gradient-text-accent">built.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="glass-card rounded-xl overflow-hidden hover-lift group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover project-image-zoom group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                {project.badge && (
                  <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    {project.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
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
