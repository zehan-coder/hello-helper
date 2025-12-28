import { FloatingDock, Hero, About, Projects, Contact, Footer } from "@/components/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingDock />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
