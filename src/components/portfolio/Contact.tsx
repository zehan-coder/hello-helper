import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Twitter, label: "@Shandaar_", href: "https://twitter.com/Shandaar_" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vitthal-jauhari/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Vitthal-Jauhari/" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-muted text-xs sm:text-sm font-bold mb-3 md:mb-4 hover-scale">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 font-serif">
            Ready to Build Something <span className="italic">Great?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto px-2">
            I'm available for <strong className="text-foreground">collaborations</strong>,{" "}
            <strong className="text-foreground">projects</strong>, and{" "}
            <strong className="text-foreground">learning opportunities</strong>.
          </p>
        </div>

        {/* CTA Card */}
        <div className="max-w-xl mx-auto p-5 sm:p-8 rounded-2xl border border-border bg-muted/20 hover-lift">
          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" className="gap-2 font-semibold hover-lift w-full sm:w-auto text-sm">
                    <IconComponent className="h-4 w-4" />
                    {social.label}
                  </Button>
                </a>
              );
            })}
          </div>

          {/* Email */}
          <p className="text-center text-muted-foreground text-sm sm:text-base">
            Or email:{" "}
            <a
              href="mailto:vitthaljauhari@gmail.com"
              className="font-bold text-foreground underline underline-offset-4 hover:no-underline transition-all break-all"
            >
              vitthaljauhari@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
