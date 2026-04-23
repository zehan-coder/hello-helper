import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="section-container">
        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-6 sm:gap-4 mb-6 md:mb-8">
          <div className="animate-in text-center sm:text-left max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 md:mb-3">
              Vitthal Jauhari
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground animate-in-delay-1">
              <span className="font-semibold text-foreground">AI Engineer</span> · Embedded Systems · Full-Stack ML
            </p>
          </div>

          <div
            className="group w-24 h-32 sm:w-24 sm:h-32 md:w-28 md:h-40 rounded-2xl bg-gradient-to-br from-muted to-muted/50 border-2 border-border overflow-hidden shrink-0 animate-in-delay-2 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
            style={{ animation: "float 4s ease-in-out infinite, scale-in 0.6s ease-out 0.2s forwards" }}
          >
            <img
              src={profilePhoto}
              alt="Vitthal Jauhari profile photo"
              className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-500 ease-out group-hover:scale-[1.05]"
              draggable={false}
            />
          </div>
        </div>

        <div className="status-badge mb-8 md:mb-12 animate-in-delay-2 hover-lift cursor-default text-xs sm:text-sm mx-auto sm:mx-0 w-fit">
          <span className="status-dot" />
          <span><strong>Available</strong> — Open to internships, freelance builds, and collaborations</span>
        </div>

        <div className="mb-12 md:mb-16 animate-in-delay-3">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-center sm:text-left">About</h2>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-3xl">
            I&apos;m an Artificial Intelligence undergraduate building end-to-end systems across <strong className="text-foreground font-semibold">embedded hardware</strong>, <strong className="text-foreground font-semibold">computer vision</strong>, and <strong className="text-foreground font-semibold">multilingual NLP</strong>. From autonomous drone perception to AI-powered farmer advisory and smart home automation, I enjoy turning real-world problems into practical products with clean engineering and measurable impact.
          </p>
        </div>
      </div>
    </section>
  );
};
