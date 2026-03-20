import { Award, Cloud, Shield, Brain, Code2 } from "lucide-react";

const certs = [
  {
    title: "Smart India Hackathon",
    org: "Government of India",
    icon: Award,
    highlight: true,
    description: "National-level hackathon — built a Centralized Vulnerability Detection System.",
  },
  {
    title: "Microsoft Azure AZ-900",
    org: "Microsoft",
    icon: Cloud,
    highlight: false,
    description: "Cloud fundamentals covering Azure services, security, and compliance.",
  },
  {
    title: "Cisco Cybersecurity",
    org: "Cisco Networking Academy",
    icon: Shield,
    highlight: false,
    description: "Cybersecurity essentials including threat analysis and network security.",
  },
  {
    title: "Oracle Gen AI",
    org: "Oracle",
    icon: Brain,
    highlight: false,
    description: "Generative AI fundamentals and enterprise AI applications.",
  },
  {
    title: "Cisco Python Essentials",
    org: "Cisco Networking Academy",
    icon: Code2,
    highlight: false,
    description: "Python programming fundamentals and practical application development.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Certifications</p>
        <h2 className="section-heading mb-4">
          Credentials & <span className="gradient-text-accent">achievements.</span>
        </h2>
        <p className="text-muted-foreground text-sm mb-14 max-w-xl">
          Industry-recognized certifications validating my skills across cloud, security, and AI.
        </p>

        {/* SIH Featured Cert */}
        <div className="sih-featured-card rounded-2xl p-8 mb-8 hover-lift relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 glow-circle opacity-30" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0 sih-badge-pulse">
              <Award size={28} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">🏆 Featured Achievement</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{certs[0].title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{certs[0].org}</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{certs[0].description}</p>
            </div>
          </div>
        </div>

        {/* Other Certs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.slice(1).map((cert) => {
            const Icon = cert.icon;
            return (
              <div key={cert.title} className="cert-card rounded-xl p-6 hover-lift group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1 text-sm">{cert.title}</h3>
                <p className="text-xs text-primary font-medium mb-2">{cert.org}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
