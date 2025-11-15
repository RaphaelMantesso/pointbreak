const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3001/api';

export interface Post {
  id: string;
  title: string;
  slug: string;
  category: 'SURF' | 'REISE';
  excerpt: string;
  content: any;
  image: string;
  publishedDate: string;
  createdAt: string;
  updatedAt: string;
}

export async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${PAYLOAD_API_URL}/posts?limit=100`, {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });

    if (!res.ok) {
      console.error('Failed to fetch posts:', res.status);
      return [];
    }

    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(`${PAYLOAD_API_URL}/posts?where[slug][equals]=${slug}&limit=1`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error('Failed to fetch post:', res.status);
      return null;
    }

    const data = await res.json();
    return data.docs?.[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Helper function to convert Slate/Lexical content to HTML
export function convertContentToHTML(content: any): string {
  if (!content || !Array.isArray(content)) {
    return '';
  }

  return content.map((node: any) => {
    if (!node.children) return '';

    const text = node.children.map((child: any) => {
      let textContent = child.text || '';
      
      if (child.bold) textContent = `<strong>${textContent}</strong>`;
      if (child.italic) textContent = `<em>${textContent}</em>`;
      if (child.underline) textContent = `<u>${textContent}</u>`;
      
      return textContent;
    }).join('');

    switch (node.type) {
      case 'h1':
        return `<h1>${text}</h1>`;
      case 'h2':
        return `<h2>${text}</h2>`;
      case 'h3':
        return `<h3>${text}</h3>`;
      case 'h4':
        return `<h4>${text}</h4>`;
      case 'h5':
        return `<h5>${text}</h5>`;
      case 'h6':
        return `<h6>${text}</h6>`;
      case 'blockquote':
        return `<blockquote>${text}</blockquote>`;
      case 'ul':
        return `<ul>${text}</ul>`;
      case 'ol':
        return `<ol>${text}</ol>`;
      case 'li':
        return `<li>${text}</li>`;
      case 'link':
        return `<a href="${node.url}">${text}</a>`;
      default:
        return `<p>${text}</p>`;
    }
  }).join('\n');
}

// Helper function to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('no-NO', options);
}

