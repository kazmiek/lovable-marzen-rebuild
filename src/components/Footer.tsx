const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Osiedle Spełnionych Marzeń</h3>
            <p className="text-primary-foreground/80 text-sm">
              Nowoczesne domy bliźniacze w Żelechowie. 
              Życie w harmonii z naturą.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#projekt" className="hover:text-primary-foreground transition-colors">O projekcie</a></li>
              <li><a href="#lokalizacja" className="hover:text-primary-foreground transition-colors">Lokalizacja</a></li>
              <li><a href="#domy" className="hover:text-primary-foreground transition-colors">Domy</a></li>
              <li><a href="#kontakt" className="hover:text-primary-foreground transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>+48 123 456 789</li>
              <li>info@osiedlemarzen.pl</li>
              <li>ul. Spełnionych Marzeń<br />96-321 Żelechów</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Informacje</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Polityka prywatności</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Regulamin</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">RODO</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Osiedle Spełnionych Marzeń. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;