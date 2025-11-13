import Image from 'next/image';

export default function KontaktPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600&q=80"
          alt="Kontakt Point Break"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Kontakt Oss</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Vi hører gjerne fra deg!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Send oss en melding
              </h2>
              <p className="text-gray-600 mb-8">
                Har du spørsmål om våre surfcamps? Vil du vite mer om destinasjoner 
                eller booking? Fyll ut skjemaet så tar vi kontakt med deg så snart som mulig!
              </p>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                    Navn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Ditt fulle navn"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="din.epost@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="+47 123 45 678"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2">
                    Emne *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Velg et emne</option>
                    <option value="booking">Booking / Reservasjon</option>
                    <option value="info">Generell informasjon</option>
                    <option value="destinasjoner">Spørsmål om destinasjoner</option>
                    <option value="priser">Priser og pakker</option>
                    <option value="annet">Annet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                    Melding *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    placeholder="Skriv din melding her..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-dark transition-colors"
                >
                  Send Melding
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Kontaktinformasjon
              </h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">E-post</h3>
                    <a href="mailto:post@pointbreak.no" className="text-accent hover:text-accent-dark">
                      post@pointbreak.no
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Vi svarer vanligvis innen 24 timer
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Telefon</h3>
                    <a href="tel:+4712345678" className="text-accent hover:text-accent-dark">
                      +47 123 45 678
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Man-Fre: 09:00 - 17:00
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Adresse</h3>
                    <p className="text-gray-700">
                      Strandveien 123<br />
                      0250 Oslo<br />
                      Norge
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Sosiale Medier</h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="text-accent hover:text-accent-dark font-semibold"
                      >
                        Instagram
                      </a>
                      <a
                        href="#"
                        className="text-accent hover:text-accent-dark font-semibold"
                      >
                        Facebook
                      </a>
                      <a
                        href="#"
                        className="text-accent hover:text-accent-dark font-semibold"
                      >
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="mt-12 bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  Ofte stilte spørsmål
                </h3>
                <p className="text-gray-600 mb-4">
                  Kanskje du finner svaret på spørsmålet ditt i vår FAQ?
                </p>
                <a
                  href="/reisebrev"
                  className="inline-block text-accent hover:text-accent-dark font-semibold"
                >
                  Les våre artikler →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-200 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            Finn Oss
          </h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600 text-lg">
              [Kart vil bli lagt til her]
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

