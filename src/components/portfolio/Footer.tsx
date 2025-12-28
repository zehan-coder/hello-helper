export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 pb-24 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Vitthal Jauhari</p>
          <p>Built with clarity and code.</p>
        </div>
      </div>
    </footer>
  );
};
