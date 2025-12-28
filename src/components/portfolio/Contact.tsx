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
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-sm font-bold mb-4 hover-scale">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Ready to Build Something <span className="italic">Great?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            I'm available for <strong className="text-foreground">collaborations</strong>, <strong className="text-foreground">projects</strong>, and <strong className="text-foreground">learning opportunities</strong>.
          </p>
        </div>

        {/* CTA Card */}
        <div className="max-w-xl mx-auto p-8 rounded-2xl border border-border bg-muted/20 hover-lift">
          <p className="text-center mb-6 text-muted-foreground text-lg">
            Prefer DMs? Reach me on <strong className="text-foreground">X (Twitter)</strong>. I'm quick to respond.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2 font-semibold hover-lift">
                    <IconComponent className="h-4 w-4" />
                    {social.label}
                  </Button>
                </a>
              );
            })}
          </div>

          {/* Email */}
          <p className="text-center text-muted-foreground">
            Or email:{" "}
            <a
              href="mailto:vitthal@example.com"
              className="font-bold text-foreground underline underline-offset-4 hover:no-underline transition-all"
            >
              vitthal@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
