import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-fade-in-up">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-gradient">FASSEU FRANCK</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
              Développeur Web Fullstack
            </p>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionné par la création d'expériences web innovantes et élégantes.
            Je transforme vos idées en solutions numériques performantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto"
            >
              Découvrir mes projets
              <ArrowDown className="ml-2 animate-bounce" />
            </Button>
            <Button
              variant="ghost-aqua"
              size="xl"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto"
            >
              Me contacter
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={32} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};

export default Hero;
