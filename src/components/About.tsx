import { User, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-glow opacity-20"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Mon Parcours & <span className="text-gradient">Ma Vision</span>
            </h2>
            <div className="w-24 h-1 gradient-ice mx-auto rounded-full shadow-glow"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-up relative z-10">
            <div className="glass-ice rounded-2xl p-6 md:p-8 hover:shadow-glow transition-all duration-300 liquid-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl gradient-ice shadow-glow">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">
                    Développeur Fullstack & Étudiant en Génie Logiciel
                  </h3>
                </div>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Développeur Fullstack et étudiant en Génie Logiciel, je suis motivé, rigoureux et curieux.
                J'ai développé des bases solides en programmation et en conception de solutions numériques.
              </p>
            </div>

            <div className="glass-ice rounded-2xl p-6 md:p-8 hover:shadow-glow transition-all duration-300 liquid-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl gradient-deep shadow-glow">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">
                    Engagement & Apprentissage
                  </h3>
                </div>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Toujours prêt à apprendre, je m'investis pleinement dans chaque projet avec sérieux et fiabilité.
                Mon sens des responsabilités et ma capacité à collaborer font de moi un atout de confiance au sein d'une équipe.
              </p>
            </div>

            <div className="glass-ice rounded-2xl p-6 md:p-8 hover:shadow-glow transition-all duration-300 liquid-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl gradient-frost shadow-glow">
                  <Heart className="text-accent-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">
                    Passion & Innovation
                  </h3>
                </div>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Passionné par les nouvelles technologies et l'innovation, je cherche constamment à créer
                des solutions élégantes qui allient esthétique et performance pour offrir la meilleure
                expérience utilisateur possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
