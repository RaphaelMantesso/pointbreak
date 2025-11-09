import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-foreground">
            POINT BREAK
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-foreground hover:text-accent transition-colors"
            >
              Hjem
            </Link>
            <Link 
              href="/reisebrev" 
              className="text-foreground hover:text-accent transition-colors"
            >
              Reisebrev
            </Link>
            <Link 
              href="/om-oss" 
              className="text-foreground hover:text-accent transition-colors"
            >
              Om Oss
            </Link>
            <Link 
              href="/kontakt" 
              className="text-foreground hover:text-accent transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

