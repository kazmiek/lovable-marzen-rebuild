import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary">
          Osiedle Spełnionych Marzeń
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#projekt" className="text-muted-foreground hover:text-foreground transition-colors">
            O projekcie
          </a>
          <a href="#lokalizacja" className="text-muted-foreground hover:text-foreground transition-colors">
            Lokalizacja
          </a>
          <a href="#domy" className="text-muted-foreground hover:text-foreground transition-colors">
            Domy
          </a>
          <a href="#deweloper" className="text-muted-foreground hover:text-foreground transition-colors">
            Deweloper
          </a>
          <a href="#kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
            Kontakt
          </a>
        </nav>
        
        <Button variant="accent" className="hidden md:block">
          Skontaktuj się
        </Button>
      </div>
    </header>
  );
};

export default Header;