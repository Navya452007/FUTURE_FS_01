import { Code2, Globe, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Java", level: 90 },
      { name: "C", level: 75 },
      { name: "Python", level: 80 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Skills</p>
        <h2 className="section-heading mb-4">
          Technologies I <span className="gradient-text-accent">work with.</span>
        </h2>
        <p className="text-muted-foreground text-sm mb-14 max-w-xl">
          A snapshot of my technical toolkit — continuously expanding through projects and practice.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="skill-card rounded-2xl p-7 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{group.title}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
