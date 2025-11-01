const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border/50 backdrop-blur-md py-8 relative overflow-hidden">
      <div className="absolute inset-0 gradient-glow opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-gradient">FASSEU FRANCK</p>
            <p className="text-sm text-muted-foreground">Développeur Web Fullstack</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} FASSEU FRANCK. Tous droits réservés.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Conçu avec passion et créativité
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
