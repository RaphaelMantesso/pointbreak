import Image from 'next/image';

export default function OmOssPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1600&q=80"
          alt="Om Point Break"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Om Oss</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Din partner for uforglemmelige surfopplevelser i Europa
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Hvem er Point Break?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Point Break er mer enn bare en surfcamp-leverandør – vi er en lidenskap, 
                et fellesskap og en livsstil. Siden vår oppstart har vi dedikert oss til 
                å skape de beste surfopplevelsene i Europa, med fokus på kvalitet, 
                sikkerhet og uforglemmelige øyeblikk.
              </p>
              <p>
                Vi tror på at surfing er for alle, uansett alder eller erfaringsnivå. 
                Våre camps er designet for å gi deg den perfekte balansen mellom læring, 
                eventyr og avslapning. Med profesjonelle coacher, fantastiske lokasjoner 
                og et varmt fellesskap, garanterer vi at du får surfopplevelsen i ditt liv.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-accent">Vår Misjon</h3>
              <p className="text-gray-700 leading-relaxed">
                Å inspirere og utstyre mennesker til å oppleve gleden ved surfing, 
                samtidig som vi bygger et globalt fellesskap av surfere som deler 
                vår lidenskap for havet og bølgene.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-accent">Vår Visjon</h3>
              <p className="text-gray-700 leading-relaxed">
                Å være Europas ledende surfcamp-leverandør, kjent for våre 
                eksepsjonelle opplevelser, profesjonelle coaching og engasjement 
                for bærekraft og miljøvern.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-foreground text-center">
              Våre Verdier
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🌊</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">Lidenskap</h4>
                <p className="text-gray-600">
                  Vi brenner for surfing og deler denne lidenskapen med alle våre gjester.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🤝</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">Fellesskap</h4>
                <p className="text-gray-600">
                  Vi skaper et inkluderende miljø hvor alle føler seg velkomne.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🌍</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">Bærekraft</h4>
                <p className="text-gray-600">
                  Vi tar vare på havet og miljøet for fremtidige generasjoner.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-foreground text-center">
              Møt Teamet
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                    alt="João Durão"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-foreground">João Durão</h4>
                  <p className="text-accent font-semibold mb-3">Head Coach - Portugal</p>
                  <p className="text-gray-600">
                    Med over 15 års erfaring i surfing, er João en av Europas mest 
                    respekterte surfcoacher. Hans lidenskap og ekspertise inspirerer 
                    surfere på alle nivåer.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80"
                    alt="Rui Henriques"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-foreground">Rui Henriques</h4>
                  <p className="text-accent font-semibold mb-3">Head Coach - Frankrike</p>
                  <p className="text-gray-600">
                    Rui kombinerer teknisk ekspertise med en smittende entusiasme. 
                    Hans evne til å motivere og undervise gjør ham til en favoritt 
                    blant våre gjester.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent to-accent-dark text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Klar for å bli med på eventyret?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bli med Point Break og opplev surfingen i ditt liv!
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Kontakt Oss
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

