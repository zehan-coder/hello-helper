import { Home, FolderOpen, Github, Linkedin, Twitter, Mail, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: FolderOpen, href: "#projects", label: "Projects" },
  { icon: Github, href: "https://github.com", label: "GitHub", external: true },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", external: true },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", external: true },
];

export const FloatingDock = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="dock">
      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className={`dock-item ${
              !item.external && activeSection === item.href.slice(1) ? "active" : ""
            }`}
            title={item.label}
          >
            <item.icon className="h-5 w-5" />
          </a>
        ))}

        <div className="w-px h-6 bg-border mx-1" />

        <button
          onClick={toggleTheme}
          className="dock-item"
          title="Toggle theme"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </nav>
  );
};
