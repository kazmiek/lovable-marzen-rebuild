import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Gotowi na dom z marzeń?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Umów się na prezentację domu i zobacz na własne oczy, dlaczego Osiedle Spełnionych Marzeń 
          to najlepszy wybór dla Twojej rodziny.
        </p>
        <Button variant="accent" size="lg" className="text-lg px-8 py-6">
          Skontaktuj się z nami już dziś
        </Button>
      </div>
    </section>
  );
};

export default CTASection;