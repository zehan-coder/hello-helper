export const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16">
      <div className="section-container">
        {/* Header with name and avatar */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              Hi, I'm Vitthal{" "}
              <span className="inline-block animate-[wave_2s_ease-in-out_infinite] origin-[70%_70%]">
                👋
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              AI/ML Engineering Student — building, learning, and sharing.
            </p>
          </div>

          {/* Avatar placeholder */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-muted border-2 border-border overflow-hidden shrink-0">
            <div className="w-full h-full flex items-center justify-center text-2xl font-semibold text-muted-foreground">
              VJ
            </div>
          </div>
        </div>

        {/* Availability Badge */}
        <div className="status-badge mb-12">
          <span className="status-dot" />
          <span>Available — Open to projects and collaborations</span>
        </div>

        {/* About */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm an AI-focused engineering student passionate about building practical,
            impact-driven tech. I enjoy turning complex problems into simple, efficient
            solutions using AI, data, and code. I learn fast, build consistently, and
            care about clean logic over hype.
          </p>
        </div>
      </div>
    </section>
  );
};
