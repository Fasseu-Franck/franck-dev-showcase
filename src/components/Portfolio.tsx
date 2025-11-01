import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Dream Real ICT",
      description:
        "Développement d'un site web complet et d'un MVP pour un centre de formation en informatique.",
      role: "Développement Frontend",
      link: "https://dreamreal-ict.com",
      gradient: "gradient-aqua",
    },
    {
      title: "Cabinet Dentaire MEKS",
      description:
        "Création d'un site professionnel pour gain de crédibilité et d'acquisition client pour un cabinet dentaire.",
      role: "Développeur Frontend",
      link: "https://cabinet-dentaire-mek-s.vercel.app",
      gradient: "gradient-deep",
    },
    {
      title: "Creatok Awards",
      description:
        "Développement d'un site web pour promouvoir la créativité de la communauté TikTok et de l'événement unique au Cameroun les Creatok Awards.",
      role: "Développeur de la plateforme et gestion de la visibilité en ligne",
      link: "https://creatokawards.cm",
      gradient: "gradient-soft",
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Mes <span className="text-gradient">Réalisations</span>
            </h2>
            <div className="w-24 h-1 gradient-aqua mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Découvrez une sélection de mes projets récents qui illustrent mon expertise
              en développement web et ma capacité à créer des solutions performantes.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-card shadow-card rounded-2xl overflow-hidden hover:shadow-aqua transition-all duration-300 hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className={`h-32 ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="text-white/20" size={80} />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2">
                    <p className="text-xs font-semibold text-primary mb-1">Rôle :</p>
                    <p className="text-sm text-muted-foreground">{project.role}</p>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Voir la démo
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
