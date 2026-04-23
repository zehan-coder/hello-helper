import { Brain, Cpu, Code2, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const aboutSections = [
  {
    icon: Brain,
    title: "What I Build",
    items: [
      "End-to-end AI systems spanning NLP, computer vision, and automation workflows",
      "Multilingual problem-solving tools designed for real-world accessibility and impact",
      "Practical ML experiences that connect research ideas to usable products",
    ],
  },
  {
    icon: Cpu,
    title: "Engineering Focus",
    items: [
      "Embedded AI systems using Arduino, ESP-based hardware, and PlatformIO",
      "Perception pipelines for gesture recognition, voice interaction, and depth-aware autonomy",
      "Scalable ML builds that balance performance, usability, and deployment readiness",
    ],
  },
  {
    icon: Code2,
    title: "Working Style",
    items: [
      "Strong fundamentals in Python, Java, DSA, OOP, SQL, and Linux workflows",
      "Comfortable shipping polished web experiences alongside backend-integrated AI features",
      "Fast learner who enjoys collaboration, iteration, and solving concrete user problems",
    ],
  },
  {
    icon: MessageCircle,
    title: "Ask Me About",
    items: [
      "Computer vision and embedded ML pipelines",
      "Multimodal AI systems with NLP and voice interfaces",
      "Data preprocessing, model workflows, and practical deployment",
      "Freelance product builds and turning ideas into working demos",
    ],
  },
];

const skills = [
  "Python",
  "Java",
  "DSA",
  "OOP",
  "Git & GitHub",
  "Linux",
  "SQL & Databases",
  "Data Analysis",
  "Data Preprocessing",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "TensorFlow",
  "PyTorch",
  "Arduino",
  "ESP Systems",
  "PlatformIO",
  "HTML",
  "CSS",
  "JavaScript",
  "Vercel",
  "Cloudflare",
];

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2">
            I&apos;m a B.Tech Artificial Intelligence student at Amity University, Noida with hands-on experience across embedded systems, multilingual AI, autonomous perception, and freelance product development. I like building systems that are thoughtful, efficient, and grounded in useful outcomes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-16 px-2">
          {skills.map((skill, index) => (
            <Badge
              key={skill}
              variant="outline"
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {skill}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
          {aboutSections.slice(0, 3).map((section, index) => (
            <Card
              key={section.title}
              className="glass-card hover-glow group transition-all duration-300 hover:border-primary/50 w-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <section.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-xs sm:text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-4 sm:mt-6">
          <Card
            className="glass-card hover-glow group transition-all duration-300 hover:border-primary/50 w-full md:w-1/2 lg:w-1/3"
            style={{ animationDelay: "300ms" }}
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">Ask Me About</h3>
              </div>
              <ul className="space-y-2">
                {aboutSections[3].items.map((item, i) => (
                  <li key={i} className="text-muted-foreground text-xs sm:text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
