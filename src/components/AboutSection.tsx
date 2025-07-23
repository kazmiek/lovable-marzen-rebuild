const AboutSection = () => {
  return (
    <section id="projekt" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Odkryj wyjątkowy styl życia przy lesie
          </h2>
          <p className="text-xl text-muted-foreground">
            Osiedle Spełnionych Marzeń to nie tylko domy - to całkowicie nowy styl życia 
            w harmonii z naturą. Każdy detal został przemyślany z myślą o Twoim komforcie 
            i bliskości przyrody.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">6</div>
            <div className="text-sm text-muted-foreground">
              Wyjątkowych domów
              <br />
              W zabudowie bliźniaczej
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-muted-foreground">
              Kondygnacje
              <br />
              Poddasze użytkowe
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500</div>
            <div className="text-sm text-muted-foreground">
              m²
              <br />
              Działki
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">30</div>
            <div className="text-sm text-muted-foreground">
              Minut
              <br />
              Do centrum Warszawy
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Nowoczesna architektura</h3>
            <p className="text-muted-foreground">
              Elegancki design domów bliźniaczych z wykorzystaniem najlepszej jakości materiałów
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Tylko 30 km od Warszawy</h3>
            <p className="text-muted-foreground">
              Doskonały balans między spokojem podmiejskiego życia, a bliskością wielkomiejskich udogodnień
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Zaledwie 2 km od trasy S8</h3>
            <p className="text-muted-foreground">
              Szybki i wygodny dojazd do centrum Warszawy oraz innych kluczowych lokalizacji
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Cicha i spokojna okolica</h3>
            <p className="text-muted-foreground">
              Mimo bliskości głównych tras, miejsce zapewnia ciszę, prywatność i komfort codziennego życia
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Bezpośrednie sąsiedztwo lasu</h3>
            <p className="text-muted-foreground">
              Idealne warunki do spacerów, joggingu i relaksu na łonie natury
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Stworzone z myślą o rodzinach</h3>
            <p className="text-muted-foreground">
              Bezpieczne otoczenie, bliskość zieleni i świetna komunikacja z miastem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;