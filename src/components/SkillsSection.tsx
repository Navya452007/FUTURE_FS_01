const skillGroups = [
  { title: "Programming", skills: ["Java", "C", "Python"] },
  { title: "Web", skills: ["HTML", "CSS", "JavaScript", "Node.js"] },
  { title: "Database", skills: ["MongoDB", "SQL"] },
  { title: "Tools", skills: ["GitHub", "VS Code"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Skills</p>
        <h2 className="section-heading mb-12">
          Technologies I <span className="gradient-text-accent">work with.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-card rounded-xl p-6 hover-lift">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
