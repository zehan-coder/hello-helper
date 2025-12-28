import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "B.Tech in Artificial Intelligence & Machine Learning",
    degree: "Bachelor of Technology",
    period: "2023 - 2027",
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
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="timeline-item hover-lift p-4 -mx-4 rounded-xl">
              <div className="timeline-logo hover-scale">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg">{edu.institution}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap px-3 py-1 bg-muted rounded-full">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span 
                key={skill} 
                className="skill-tag hover-lift font-medium"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <div 
              key={interest.title}
              className="p-5 rounded-xl border border-transparent hover:border-border hover:bg-muted/30 transition-all duration-300"
            >
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-xl">{interest.emoji}</span>
                {interest.title}
              </h3>
              <ul className="space-y-2">
                {interest.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-foreground/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fun Fact */}
        <div className="mt-12 p-6 rounded-xl bg-muted/30 border border-border hover-lift">
          <p className="text-base">
            <span className="font-bold">⚡ Fun fact:</span>{" "}
            <span className="text-muted-foreground italic font-serif text-lg">
              I prefer clarity over complexity—if it can be simpler, it should be.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
