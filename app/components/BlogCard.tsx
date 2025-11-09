import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/reisebrev/${post.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-white px-3 py-1 text-sm font-bold uppercase tracking-wide">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="mb-2 text-sm text-gray-500 uppercase tracking-wide">
          {post.date}
        </p>
        <h3 className="mb-3 text-xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

