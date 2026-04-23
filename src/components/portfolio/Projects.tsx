import { ExternalLink, Github } from "lucide-react";

type Project = {
  initial: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  status?: string;
};

const projects: Project[] = [
  {
    initial: "C",
    title: "CropQuery",
    description:
      "A multilingual vision-language system for agricultural monitoring that combines computer vision with language model workflows to support disease guidance and farmer-friendly advisory.",
    tags: ["Computer Vision", "NLP", "Multilingual AI", "Agritech"],
    status: "In development",
  },
  {
    initial: "A",
    title: "AI-CRAFT",
    description:
      "An embedded AI home automation system built around gesture recognition, wake-word voice control, and intent mapping for seamless multi-modal appliance control.",
    tags: ["MediaPipe", "spaCy", "ESP Systems", "Embedded AI"],
    github: "https://github.com/Vitthal-Jauhari/AI-CRAFT-Codebase",
  },
  {
    initial: "M",
    title: "MM-Solutions",
    description:
      "A freelance full-stack website for an ISO certification consultancy, focused on lead capture, polished motion, and production-ready deployment.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Vitthal-Jauhari/MM-Solutions",
  },
  {
    initial: "S",
    title: "SIH 2024 Autonomous Rescue Drone",
    description:
      "Contributed AI vision systems for an autonomous surveillance and rescue drone, including stereo depth perception for obstacle avoidance and safer path generation.",
    tags: ["Computer Vision", "Depth Perception", "Autonomous Systems", "Hackathon"],
    github: "https://github.com/Vitthal-Jauhari/Obstacle-Detection-For-Autonomous-Drones",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-muted text-xs sm:text-sm font-bold mb-3 md:mb-4 hover-scale">
            My Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 font-serif">
            Work grounded in <span className="italic">real-world problems</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            A mix of AI systems, embedded intelligence, and shipped web products built to be practical, measurable, and user-focused.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {projects.map((project, index) => {
            const hasActions = Boolean(project.github || project.demo);

            return (
              <div
                key={project.title}
                className="project-card group hover-lift border border-transparent hover:border-border gap-4 items-start"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="project-icon font-bold text-lg sm:text-xl group-hover:bg-muted transition-colors shrink-0">
                  {project.initial}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-bold text-base sm:text-lg">{project.title}</h3>
                    {project.status && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border border-border bg-muted/40 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {hasActions ? (
                  <div className="flex items-center gap-1 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-2.5 rounded-lg hover:bg-muted transition-colors hover-scale"
                        title={`View ${project.title} source`}
                      >
                        <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-2.5 rounded-lg hover:bg-muted transition-colors hover-scale"
                        title={`View ${project.title} demo`}
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="text-xs sm:text-sm text-muted-foreground shrink-0 pt-1">
                    Details coming soon
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
