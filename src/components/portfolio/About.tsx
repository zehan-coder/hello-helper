import { Brain, BookOpen, Users, HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const aboutSections = [
  {
    icon: Brain,
    title: "Currently Working On",
    items: [
      "AI & ML projects focused on real-world use cases",
      "Strengthening DSA, Python, and system fundamentals",
      "Building a strong developer portfolio with meaningful projects",
    ],
  },
  {
    icon: BookOpen,
    title: "Currently Learning",
    items: [
      "Machine Learning & AI",
      "Database Management Systems",
      "Data Structures in C",
      "Python for scalable applications",
      "Basics of system design",
    ],
  },
  {
    icon: Users,
    title: "Looking to Collaborate On",
    items: [
      "AI / ML projects",
      "Data-driven applications",
      "Open-source tools related to automation, analytics, or AI",
    ],
  },
  {
    icon: HelpCircle,
    title: "Looking for Help With",
    items: ["Advanced ML concepts", "Model optimization & deployment", "Industry-level project guidance"],
  },
  {
    icon: MessageCircle,
    title: "Ask Me About",
    items: ["AI & ML fundamentals", "Python programming", "DBMS concepts", "Problem-solving & logic building"],
  },
];

const skills = [
  "Python",
  "Machine Learning",
  "TensorFlow",
  "Data Structures",
  "SQL",
  "C Programming",
  "Problem Solving",
  "Git",
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Main Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm an AI-focused engineering student passionate about building practical, impact-driven tech. I enjoy
            turning complex problems into simple, efficient solutions using AI, data, and code. I learn fast, build
            consistently, and care about clean logic over hype.
          </p>
        </div>

        {/* Skills Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skills.map((skill, index) => (
            <Badge
              key={skill}
              variant="outline"
              className="px-4 py-2 text-sm border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutSections.map((section, index) => (
            <Card
              key={section.title}
              className="glass-card hover-glow group transition-all duration-300 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
