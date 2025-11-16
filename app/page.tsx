import CourseCard from './components/CourseCard';
import Link from 'next/link';
import { getHero, getCourses } from '@/lib/payload';

export default async function Home() {
  // Fetch hero and courses from Payload CMS
  const hero = await getHero();
  const courses = await getCourses();

  // Default values if no hero in CMS
  const heroTitle = hero?.title || 'POINT BREAK';
  const heroSubtitle = hero?.subtitle || 'Opplev de beste surfcampene i Europa';
  const heroImage = hero?.backgroundImage?.startsWith('http')
    ? hero.backgroundImage
    : 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1600&q=80';

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <div className="max-w-4xl px-6">
            <h1 className="mb-6 text-5xl font-bold md:text-7xl tracking-tight">
              {heroTitle}
            </h1>
            <p className="text-xl md:text-2xl font-light">
              {heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="surfcamper" className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-4xl font-bold text-center text-foreground">
            Våre Surfcamper
          </h2>
          <p className="mb-12 text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Velg din drømmedestinasjon og opplev surfing på sitt beste
          </p>
          {courses.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-4">Ingen kurs tilgjengelig ennå.</p>
              <p className="text-gray-600">
                Opprett ditt første kurs i{' '}
                <a
                  href="http://localhost:3001/admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Payload CMS Admin
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-accent text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Klar for ditt neste surfeeventyr?
          </h2>
          <p className="text-xl mb-8">
            Kontakt oss i dag og la oss hjelpe deg med å finne den perfekte surfcampen!
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Kontakt oss
          </Link>
        </div>
      </section>
    </main>
  );
}
