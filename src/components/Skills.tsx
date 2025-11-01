import { Code, Palette, Brain, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Tailwind CSS",
    "PHP",
    "WordPress",
    "Shopify",
  ];

  const aiSkills = [
    "Création de prompts IA",
    "Analyse de niche",
    "Conception sonore (Suno.ai)",
  ];

  const softSkills = [
    "Sens de l'organisation",
    "Leadership",
    "Communication efficace",
    "Autonomie et rigueur",
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Compétences Clés & <span className="text-gradient">Expertise</span>
            </h2>
            <div className="w-24 h-1 gradient-aqua mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Technical Skills */}
            <div className="bg-card shadow-card rounded-2xl p-6 md:p-8 hover:shadow-aqua transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl gradient-aqua">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Compétences Techniques
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* AI Skills */}
            <div className="bg-card shadow-card rounded-2xl p-6 md:p-8 hover:shadow-aqua transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl gradient-deep">
                  <Brain className="text-white" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Intelligence Artificielle
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {aiSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-card shadow-card rounded-2xl p-6 md:p-8 hover:shadow-aqua transition-all duration-300 animate-fade-in-up md:col-span-2 lg:col-span-1" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent">
                  <Users className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Compétences Humaines
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
