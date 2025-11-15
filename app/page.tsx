import BlogCard from './components/BlogCard';
import { getPosts, formatDate } from '@/lib/payload';

export default async function Home() {
  // Fetch posts from Payload CMS
  const posts = await getPosts();

  // Default image for posts without valid image URL
  const defaultImage = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80';

  // Transform posts to match BlogCard interface
  const blogPosts = posts.slice(0, 3).map(post => ({
    id: post.id,
    title: post.title,
    category: post.category,
    date: formatDate(post.publishedDate),
    excerpt: post.excerpt,
    image: post.image?.startsWith('http') ? post.image : defaultImage,
    slug: post.slug
  }));
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
          {blogPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              Ingen blogginnlegg ennå. Opprett ditt første innlegg i Payload CMS!
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
