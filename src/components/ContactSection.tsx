import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="section-label">Contact</p>
        <h2 className="section-heading mb-4">
          Let's build something<br />
          <span className="gradient-text-accent">meaningful.</span>
        </h2>
        <p className="text-muted-foreground mb-10 text-sm">
          I'm open to internship opportunities, collaborations, and interesting projects.
        </p>

        <a
          href="mailto:navyasrijettiboina@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity mb-8"
        >
          <Mail size={18} />
          navyasrijettiboina@gmail.com
        </a>

        <div className="flex items-center justify-center gap-4 mt-6">
          <a href="https://github.com/Navya452007" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-lg hover:bg-muted transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/navya-sri-jettiboina-540705332" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-lg hover:bg-muted transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://leetcode.com/u/navyasri_jettiboina/" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-lg hover:bg-muted transition-colors text-xs font-bold">
            LC
          </a>
          <a href="https://www.codechef.com/users/void_mellow_74" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-lg hover:bg-muted transition-colors text-xs font-bold">
            CC
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
