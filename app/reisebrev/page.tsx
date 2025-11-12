import BlogCard from '../components/BlogCard';

// Mock data - same as homepage
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

export default function ReisebrevPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-accent/10 to-transparent py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl md:text-6xl font-bold text-foreground">
            Reisebrev
          </h1>
          <p className="text-xl text-gray-700">
            Historier, tips og inspirasjon fra våre surfcamps rundt om i Europa
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
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

