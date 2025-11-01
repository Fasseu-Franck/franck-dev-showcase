import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "CFPC Dream Real-ICT",
      period: "2025 - Présent",
      role: "Développeur Web",
      achievements: [
        "Rédaction du cahier des charges et création du MVP",
        "Développement, test et intégration du site",
      ],
    },
    {
      company: "Ecom Astral",
      period: "2025",
      role: "Développeur Shopify",
      achievements: [
        "Conception et mise en ligne de sites e-commerce pour le marché international",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Glowing Effects */}
      <div className="absolute top-40 left-10 w-80 h-80 gradient-glow opacity-15 blur-3xl animate-float"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 gradient-glow opacity-10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Parcours <span className="text-gradient">Professionnel</span>
            </h2>
            <div className="w-24 h-1 gradient-ice mx-auto rounded-full shadow-glow"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 gradient-ice shadow-glow"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative animate-fade-in-up ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 -ml-4 rounded-full gradient-ice shadow-glow flex items-center justify-center">
                    <Briefcase className="text-white" size={16} />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                    <div className="glass-ice rounded-2xl p-6 md:p-8 hover:shadow-glow transition-all duration-300 liquid-border">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Calendar size={16} />
                        <span className="text-sm font-semibold">{exp.period}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-base md:text-lg text-primary font-medium mb-4">
                        {exp.role}
                      </p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span className="text-sm md:text-base">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
