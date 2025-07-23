import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-houses.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            NOWA INWESTYCJA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Żelechów
            <br />
            <span className="text-accent">Domy z Twoich Marzeń</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Odkryj wyjątkowe osiedle położone w otoczeniu zielonego lasu, 
            gdzie nowoczesny komfort spotyka się z pięknem natury.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="font-medium">Przy lesie</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Calendar className="h-5 w-5 text-accent" />
              <span className="font-medium">Oddanie Q4 2025</span>
            </div>
          </div>
          
          <Button variant="accent" size="lg" className="text-lg px-8 py-6">
            Skontaktuj się z nami
          </Button>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Ceny od</div>
              <div className="text-2xl font-bold text-accent">1 000 000 zł</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Powierzchnia</div>
              <div className="text-2xl font-bold">136 m²</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Dostępne</div>
              <div className="text-2xl font-bold text-primary">6 domów</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;