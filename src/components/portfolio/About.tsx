import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "B.Tech in Artificial Intelligence & Machine Learning",
    degree: "Bachelor of Technology",
    period: "2023 - 2027",
    icon: "🎓",
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
  "Pandas",
  "NumPy",
];

const interests = [
  { emoji: "🧠", title: "Currently Working On", items: ["AI & ML projects", "DSA fundamentals", "Building portfolio projects"] },
  { emoji: "📚", title: "Learning", items: ["Machine Learning", "DBMS", "System Design basics"] },
  { emoji: "🤝", title: "Open to Collaborate", items: ["AI/ML projects", "Data-driven apps", "Open-source tools"] },
  { emoji: "💬", title: "Ask Me About", items: ["AI & ML fundamentals", "Python", "Problem-solving"] },
];

export const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="section-container">
        {/* Education */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-6">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-logo">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium">{edu.institution}</h3>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {interests.map((interest) => (
            <div key={interest.title}>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <span>{interest.emoji}</span>
                {interest.title}
              </h3>
              <ul className="space-y-1">
                {interest.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fun Fact */}
        <div className="mt-12 p-6 rounded-xl bg-muted/30 border border-border">
          <p className="text-sm">
            <span className="font-medium">⚡ Fun fact:</span>{" "}
            <span className="text-muted-foreground italic font-serif">
              I prefer clarity over complexity—if it can be simpler, it should be.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
