import BlogCard from './components/BlogCard';

// Temporary mock data
const blogPosts = [
  {
    id: 1,
    title: '"Det er den beste jobben i verden" – Feir International Surfedag med våre surfcoacher',
    category: 'SURF',
    date: 'September 8, 2025',
    excerpt: 'Finn frem surfbrettet og kjenn på spenningen, det er den internasjonale surfedagen!',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80',
    slug: 'beste-jobben-i-verden'
  },
  {
    id: 2,
    title: 'Surfing i Portugal: De beste spotene for nybegynnere',
    category: 'REISE',
    date: 'September 5, 2025',
    excerpt: 'Opplev de beste bølgene Portugal har å tilby for surfere på alle nivåer.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    slug: 'surfing-portugal'
  },
  {
    id: 3,
    title: 'Surfcamp i Frankrike: En guide til Atlanterhavskysten',
    category: 'SURF',
    date: 'September 1, 2025',
    excerpt: 'Fra Biarritz til Hossegor - utforsk de beste surfcampene langs den franske kysten.',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80',
    slug: 'surfcamp-frankrike'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1600&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <div className="max-w-4xl px-6">
            <h1 className="mb-6 text-5xl font-bold md:text-7xl tracking-tight">
              POINT BREAK
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Opplev de beste surfcampene i Europa
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold text-center text-foreground">
            Våre Reisebrev
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
