const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
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
