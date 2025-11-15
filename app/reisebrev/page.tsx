import BlogCard from '../components/BlogCard';
import { getPosts, formatDate } from '@/lib/payload';

export default async function ReisebrevPage() {
  // Fetch posts from Payload CMS
  const posts = await getPosts();

  // Default image for posts without valid image URL
  const defaultImage = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80';

  // Transform posts to match BlogCard interface
  const blogPosts = posts.map(post => ({
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
          {blogPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">
                Ingen blogginnlegg ennå.
              </p>
              <p className="text-gray-500">
                Opprett ditt første innlegg i Payload CMS på{' '}
                <a
                  href="http://localhost:3001/admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  localhost:3001/admin
                </a>
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

