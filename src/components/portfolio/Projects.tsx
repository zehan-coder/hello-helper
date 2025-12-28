import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    initial: "M",
    title: "ML Project Coming Soon",
    description: "Machine learning focused on real-world use cases",
    tags: ["Python", "TensorFlow", "Pandas"],
    github: "#",
    demo: "#",
    soon: true,
  },
  {
    initial: "D",
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for data visualization",
    tags: ["Python", "Streamlit", "Plotly"],
    github: "#",
    demo: "#",
    soon: true,
  },
  {
    initial: "A",
    title: "AI Automation Tool",
    description: "Automation leveraging AI for workflows",
    tags: ["Python", "FastAPI", "OpenAI"],
    github: "#",
    demo: "#",
    soon: true,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-sm font-bold mb-4 hover-scale">
            My Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Check out my <span className="italic">latest work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Building projects that <strong className="text-foreground">solve real problems</strong> with clean, efficient code.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-3">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card group hover-lift border border-transparent hover:border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="project-icon font-bold text-xl group-hover:bg-muted transition-colors">
                {project.initial}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  {project.soon && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground font-semibold">
                      Soon
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">{project.tags.join(" • ")}</p>
              </div>

              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a
                  href={project.github}
                  className="p-2.5 rounded-lg hover:bg-muted transition-colors hover-scale"
                  title="View source"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={project.demo}
                  className="p-2.5 rounded-lg hover:bg-muted transition-colors hover-scale"
                  title="View demo"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
