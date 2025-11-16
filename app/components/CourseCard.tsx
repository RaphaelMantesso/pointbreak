import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  course: {
    id: string;
    name: string;
    location: string;
    price: number;
    availableSpots: number;
    highlights: Array<{ highlight: string; id?: string }>;
    image: string;
    description: string;
    duration: string;
  };
}

export default function CourseCard({ course }: CourseCardProps) {
  // Validate image URL
  const imageUrl = course.image?.startsWith('http') 
    ? course.image 
    : 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80';

  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={course.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-accent text-white px-3 py-1 text-sm font-bold rounded-full">
            {course.availableSpots} plasser
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location */}
        <p className="mb-2 text-sm text-gray-500 uppercase tracking-wide">
          {course.location}
        </p>

        {/* Name */}
        <h3 className="mb-3 text-2xl font-bold text-foreground leading-tight">
          {course.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Highlights */}
        <div className="mb-4">
          <ul className="space-y-1">
            {course.highlights.slice(0, 3).map((item, index) => (
              <li key={item.id || index} className="text-sm text-gray-700 flex items-start">
                <span className="text-accent mr-2">✓</span>
                {item.highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Duration */}
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">Varighet:</span> {course.duration}
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-500">Fra</p>
            <p className="text-2xl font-bold text-accent">
              {course.price.toLocaleString('no-NO')} kr
            </p>
          </div>
          <Link
            href="/kontakt"
            className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Book nå
          </Link>
        </div>
      </div>
    </div>
  );
}

