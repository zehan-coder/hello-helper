import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub", username: "@vitthal" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", username: "Vitthal Jauhari" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", username: "@vitthal" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Main CTA */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="glass-card p-8 md:p-12 rounded-2xl glow-border">
            <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Something Together</h3>
            <p className="text-muted-foreground mb-8">
              Whether you have a question, a project idea, or just want to say hi — my inbox is always open!
            </p>
            <a href="mailto:vitthal@example.com">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity group"
              >
                Say Hello
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-6 py-4 rounded-xl flex items-center gap-4 hover-glow hover:border-primary/50 transition-all duration-300 group"
            >
              <social.icon className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">{social.label}</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  {social.username}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
