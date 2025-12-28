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
    <section id="projects" className="py-16">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium mb-4">
            My Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Check out my latest work
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            I've worked on a variety of projects, from simple scripts to complex applications. Here are a few highlights.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-2">
          {projects.map((project) => (
            <div key={project.title} className="project-card group">
              <div className="project-icon">
                {project.initial}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium">{project.title}</h3>
                  {project.soon && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      Soon
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{project.tags.join(", ")}</p>
              </div>

              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={project.github}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  title="View source"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={project.demo}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  title="View demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
