import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Skontaktuj się z nami
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Informacje kontaktowe</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-muted-foreground">+48 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-muted-foreground">info@osiedlemarzen.pl</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium">Biuro sprzedaży</p>
                    <p className="text-muted-foreground">
                      ul. Spełnionych Marzeń<br />
                      96-321 Żelechów
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-card rounded-lg">
                <h4 className="font-semibold mb-2">Godziny otwarcia biura</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Poniedziałek - Piątek: 9:00 - 17:00</p>
                  <p>Sobota: 10:00 - 15:00</p>
                  <p>Niedziela: zamknięte</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-8">Wyślij wiadomość</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Imię" />
                  <Input placeholder="Nazwisko" />
                </div>
                
                <Input type="email" placeholder="Adres e-mail" />
                <Input type="tel" placeholder="Numer telefonu" />
                
                <Textarea 
                  placeholder="Wiadomość" 
                  rows={4}
                />
                
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z RODO
                  </label>
                </div>
                
                <Button variant="accent" className="w-full">
                  Wyślij wiadomość
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;