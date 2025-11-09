import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">POINT BREAK</h3>
            <p className="text-gray-400">
              Opplev de beste surfcampene i Europa
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Hurtiglenker</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-accent transition-colors">
                  Hjem
                </Link>
              </li>
              <li>
                <Link href="/reisebrev" className="text-gray-400 hover:text-accent transition-colors">
                  Reisebrev
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-gray-400 hover:text-accent transition-colors">
                  Om Oss
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-400 hover:text-accent transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Destinasjoner</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Portugal</li>
              <li>Frankrike</li>
              <li>Spania</li>
              <li>Marokko</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>post@pointbreak.no</li>
              <li>+47 123 45 678</li>
              <li className="pt-4">
                <div className="flex gap-4">
                  <a href="#" className="hover:text-accent transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-accent transition-colors">
                    Facebook
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Point Break. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
}

