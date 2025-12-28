import { Github, Linkedin, Mail, Twitter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:vitthal@example.com", label: "Email" },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 animate-grid-fade" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-20 left-10 opacity-20 font-mono text-sm text-primary animate-float hidden lg:block">
        <pre>{`def train_model():`}</pre>
        <pre>{`  model.fit(X, y)`}</pre>
      </div>
      <div className="absolute bottom-32 right-10 opacity-20 font-mono text-sm text-secondary animate-float animation-delay-400 hidden lg:block">
        <pre>{`import tensorflow as tf`}</pre>
        <pre>{`neural_net = tf.keras.Sequential()`}</pre>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-primary font-mono text-lg mb-4 opacity-0 animate-fade-in">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in animation-delay-200">
            <span className="gradient-text glow-text">Vitthal Jauhari</span>
          </h1>

          {/* Tagline with Typing Effect */}
          <div className="overflow-hidden mb-8 opacity-0 animate-fade-in animation-delay-400">
            <p className="text-xl md:text-2xl text-muted-foreground">
              AI/ML Engineering Student |{" "}
              <span className="text-foreground">Building Impact-Driven Tech</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in animation-delay-600">
            Passionate about turning complex problems into simple, efficient solutions
            using AI, data, and code.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-16 opacity-0 animate-fade-in animation-delay-600">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-border hover:border-primary hover:bg-primary/10 hover-glow transition-all duration-300"
                >
                  <social.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                </Button>
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="inline-block animate-float opacity-0 animate-fade-in animation-delay-600"
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};
