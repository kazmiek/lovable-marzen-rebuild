const LocationSection = () => {
  return (
    <section id="lokalizacja" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Życie w harmonii z naturą
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Osiedle Spełnionych Marzeń położone jest tuż przy lesie, oferując spokój i ciszę natury 
            przy zachowaniu dobrego dostępu do udogodnień miejskich.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Adres</h3>
                  <p className="text-muted-foreground">
                    ul. Spełnionych Marzeń<br />
                    96-321 Żelechów
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Do lasu</h3>
                  <p className="text-muted-foreground">5 minut pieszo</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Do centrum Warszawy</h3>
                  <p className="text-muted-foreground">30 minut samochodem</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Do trasy S8</h3>
                  <p className="text-muted-foreground">2 km</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Najbliższy sklep</h3>
                  <p className="text-muted-foreground">800 m</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Szkoła podstawowa</h3>
                  <p className="text-muted-foreground">1,2 km</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-muted/30 rounded-lg p-8 h-96 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  [Mapa lokalizacji]
                  <br />
                  <small>Interaktywna mapa zostanie wstawiona tutaj</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;