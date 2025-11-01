import { Mail, Phone, MapPin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "+237 671 761 503",
      link: "tel:+237671761503",
      gradient: "gradient-aqua",
    },
    {
      icon: Mail,
      label: "Email Principal",
      value: "fasfranck@gmail.com",
      link: "mailto:fasfranck@gmail.com",
      gradient: "gradient-deep",
    },
    {
      icon: Mail,
      label: "Email Professionnel",
      value: "franck.webdev@gmail.com",
      link: "mailto:franck.webdev@gmail.com",
      gradient: "gradient-deep",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Yaoundé, Nkolmbong",
      link: null,
      gradient: "bg-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Me <span className="text-gradient">Contacter</span>
            </h2>
            <div className="w-24 h-1 gradient-aqua mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
              Je suis toujours ouvert à de nouveaux défis !
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12 animate-fade-in-up">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="bg-card shadow-card rounded-2xl p-6 hover:shadow-aqua transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${info.gradient} flex-shrink-0`}>
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-foreground font-medium hover:text-primary transition-colors break-words"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium break-words">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="hero"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <a
                href="https://github.com/Fasseu-Franck"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                Voir mon GitHub
              </a>
            </Button>

            <Button
              variant="ghost-aqua"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <a
                href="https://wa.me/237671761503"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone size={20} />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
