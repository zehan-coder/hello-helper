export const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16">
      <div className="section-container">
        {/* Header with name and avatar */}
        <div className="flex items-start justify-between mb-8">
          <div className="animate-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              Hi, I'm <span className="text-foreground">Vitthal</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-in-delay-1">
              <span className="font-semibold text-foreground">AI/ML Engineering Student</span> — building, learning, and sharing.
            </p>
          </div>

          {/* Avatar */}
          <div 
            className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-muted to-muted/50 border-2 border-border overflow-hidden shrink-0 animate-in-delay-2 hover-scale"
            style={{ animation: "float 4s ease-in-out infinite, scale-in 0.6s ease-out 0.2s forwards" }}
          >
            <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-foreground">
              VJ
            </div>
          </div>
        </div>

        {/* Availability Badge */}
        <div className="status-badge mb-12 animate-in-delay-2 hover-lift cursor-default">
          <span className="status-dot" />
          <span><strong>Available</strong> — Open to projects and collaborations</span>
        </div>

        {/* About */}
        <div className="mb-16 animate-in-delay-3">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm an <strong className="text-foreground font-semibold">AI-focused engineering student</strong> passionate about building practical,
            impact-driven tech. I enjoy turning <strong className="text-foreground font-semibold">complex problems into simple, efficient
            solutions</strong> using AI, data, and code. I learn fast, build consistently, and
            care about <strong className="text-foreground font-semibold">clean logic over hype</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};
