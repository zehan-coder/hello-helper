import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Twitter, label: "@vitthal", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Build Something Great?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm available for collaborations, projects, and learning opportunities. 
            Whether you have an idea or just want to say hi — reach out!
          </p>
        </div>

        {/* CTA Card */}
        <div className="max-w-xl mx-auto p-8 rounded-2xl border border-border bg-muted/20">
          <p className="text-center mb-6 text-muted-foreground">
            Prefer DMs? Reach me on X (Twitter). I'm quick to respond.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <social.icon className="h-4 w-4" />
                  {social.label}
                </Button>
              </a>
            ))}
          </div>

          {/* Email */}
          <p className="text-center text-sm text-muted-foreground">
            Or email:{" "}
            <a
              href="mailto:vitthal@example.com"
              className="text-foreground underline underline-offset-4 hover:no-underline"
            >
              vitthal@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
