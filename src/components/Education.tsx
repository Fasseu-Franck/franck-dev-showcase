import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute inset-0 gradient-glow opacity-15"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Formation & <span className="text-gradient">Diplômes</span>
            </h2>
            <div className="w-24 h-1 gradient-ice mx-auto rounded-full shadow-glow"></div>
          </div>

          {/* Education Items */}
          <div className="space-y-6">
            {/* BAC */}
            <div className="glass-ice rounded-2xl p-6 md:p-8 hover:shadow-glow transition-all duration-300 animate-fade-in-up liquid-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl gradient-ice flex-shrink-0 shadow-glow">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        BAC C - Mention Assez Bien
                      </h3>
                      <p className="text-muted-foreground">Lycée Bilingue Nkol-Eton</p>
                    </div>
                    <Badge variant="secondary" className="px-3 py-1">
                      <Award size={14} className="mr-1" />
                      13,89
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Formation scientifique de niveau secondaire avec une spécialisation
                    en mathématiques et sciences physiques.
                  </p>
                </div>
              </div>
            </div>

            {/* Formations Complémentaires */}
            <div className="glass-ice rounded-2xl p-6 md:p-8 hover:shadow-glow transition-all duration-300 animate-fade-in-up liquid-border" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl gradient-deep flex-shrink-0 shadow-glow">
                  <BookOpen className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      Formations Complémentaires
                    </h3>
                    <p className="text-sm text-primary font-semibold">2024 - 2025</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground">OPENCLASSROOMS</p>
                        <p className="text-sm text-muted-foreground">
                          Plateforme de formation en ligne spécialisée en développement web et programmation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground">ESMATA</p>
                        <p className="text-sm text-muted-foreground">
                          Formation avancée en développement et conception web
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground">GRAFIKART</p>
                        <p className="text-sm text-muted-foreground">
                          Tutoriels et formations pratiques en développement web moderne
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
