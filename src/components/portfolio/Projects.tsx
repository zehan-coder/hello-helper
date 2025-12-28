import { ExternalLink, Github, Folder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ML Project Coming Soon",
    description:
      "A machine learning project focused on solving real-world problems with practical AI solutions.",
    tags: ["Python", "TensorFlow", "Pandas"],
    github: "#",
    demo: "#",
    placeholder: true,
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Interactive dashboard for visualizing and analyzing complex datasets with intuitive UI.",
    tags: ["Python", "Streamlit", "Plotly"],
    github: "#",
    demo: "#",
    placeholder: true,
  },
  {
    title: "AI Automation Tool",
    description:
      "Automation tool leveraging AI to streamline repetitive tasks and improve workflow efficiency.",
    tags: ["Python", "OpenAI", "FastAPI"],
    github: "#",
    demo: "#",
    placeholder: true,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here are some projects I'm working on. More coming soon as I build out my portfolio!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card hover-glow group transition-all duration-300 hover:border-primary/50 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <Folder className="h-10 w-10 text-primary" />
                  <div className="flex gap-2">
                    <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={project.demo} className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-muted/50 hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Placeholder Badge */}
                {project.placeholder && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <Badge variant="outline" className="text-xs border-secondary/50 text-secondary">
                      Coming Soon
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
