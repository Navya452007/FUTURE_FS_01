import { ExternalLink } from "lucide-react";

const profiles = [
  { name: "LeetCode", detail: "80+ problems solved", url: "https://leetcode.com/u/navyasri_jettiboina/" },
  { name: "CodeChef", detail: "Beginner", url: "https://www.codechef.com/users/void_mellow_74" },
  { name: "GitHub", detail: "Projects & contributions", url: "https://github.com/Navya452007" },
  { name: "LinkedIn", detail: "Professional profile", url: "https://www.linkedin.com/in/navya-sri-jettiboina-540705332" },
];

const CodingProfilesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Coding Profiles</p>
        <h2 className="section-heading mb-12">
          Where I <span className="gradient-text-accent">practice.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-5 hover-lift group block"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground">{p.name}</h3>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-xs text-muted-foreground">{p.detail}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
