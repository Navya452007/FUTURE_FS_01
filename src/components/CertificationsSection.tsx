import { Award } from "lucide-react";

const certs = [
  "Smart India Hackathon Participation",
  "Oracle Gen AI",
  "Cisco Cybersecurity",
  "Cisco Python Essentials",
  "Microsoft Azure (AZ-900)",
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Certifications</p>
        <h2 className="section-heading mb-12">
          Credentials & <span className="gradient-text-accent">achievements.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert) => (
            <div key={cert} className="glass-card rounded-xl p-5 flex items-start gap-3 hover-lift">
              <Award size={18} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm font-medium text-foreground">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
