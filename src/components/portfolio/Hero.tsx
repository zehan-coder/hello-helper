import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="section-container">
        {/* Header with name and avatar */}
        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-6 sm:gap-4 mb-6 md:mb-8">
          <div className="animate-in text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 md:mb-3">
              Hi, I'm <span className="text-foreground">Vitthal</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground animate-in-delay-1">
              <span className="font-semibold text-foreground">AI/ML Engineering Student</span> — building, learning, and sharing.
            </p>
          </div>

          {/* Avatar */}
          <div 
            className="w-20 h-28 sm:w-20 sm:h-28 md:w-24 md:h-36 rounded-2xl bg-gradient-to-br from-muted to-muted/50 border-2 border-border overflow-hidden shrink-0 animate-in-delay-2 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:border-primary/50"
            style={{ animation: "float 4s ease-in-out infinite, scale-in 0.6s ease-out 0.2s forwards" }}
          >
            <img 
              src={profilePhoto} 
              alt="Vitthal Jauhari" 
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out hover:scale-110"
            />
          </div>
        </div>

        {/* Availability Badge */}
        <div className="status-badge mb-8 md:mb-12 animate-in-delay-2 hover-lift cursor-default text-xs sm:text-sm mx-auto sm:mx-0 w-fit">
          <span className="status-dot" />
          <span><strong>Available</strong> — Open to projects and collaborations</span>
        </div>

        {/* About */}
        <div className="mb-12 md:mb-16 animate-in-delay-3">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-center sm:text-left">About</h2>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
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
