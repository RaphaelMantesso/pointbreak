export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <div className="max-w-4xl px-6">
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              POINT BREAK
            </h1>
            <p className="text-xl md:text-2xl">
              Opplev de beste surfcampene i Europa
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold text-center">
            Våre Reisebrev
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog posts will go here */}
            <div className="text-center text-gray-500">
              Coming soon...
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
