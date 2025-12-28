import { Home, FolderOpen, Github, Linkedin, Twitter, Mail, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: FolderOpen, href: "#projects", label: "Projects" },
  { icon: Github, href: "https://github.com/Vitthal-Jauhari/", label: "GitHub", external: true },
  { icon: Linkedin, href: "https://www.linkedin.com/in/vitthal-jauhari/", label: "LinkedIn", external: true },
  { icon: Twitter, href: "https://twitter.com/Shandaar_", label: "Twitter", external: true },
];

export const FloatingDock = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate dock in after mount
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

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
    <nav 
      className={`dock transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="flex items-center gap-0.5 sm:gap-1">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`dock-item hover-scale ${
                !item.external && activeSection === item.href.slice(1) ? "active" : ""
              }`}
              title={item.label}
            >
              <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          );
        })}

        <div className="w-px h-5 sm:h-6 bg-border mx-0.5 sm:mx-1" />

        <button
          onClick={toggleTheme}
          className="dock-item hover-scale"
          title="Toggle theme"
        >
          {isDark ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
        </button>
      </div>
    </nav>
  );
};
