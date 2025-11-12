import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock data - later this will come from Payload CMS
const blogPosts = {
  'beste-jobben-i-verden': {
    title: '"Det er den beste jobben i verden" – Feir International Surfedag med våre surfcoacher',
    category: 'SURF',
    date: 'September 8, 2025',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1600&q=80',
    content: `
      <p>Finn frem surfbrettet og kjenn på spenningen, det er den internasjonale surfedagen! Dette er ikke bare en hvilken som helst dag, det er en internasjonal feiring av alt som gjør surfing så spesielt: bølgene, salt vann mot huden og fellesskapet som lever for de perfekte bølgene. Hos Point Break er surfing mer enn et DNA, og i dag dykker vi ned sammen med av våre hoved coacher.</p>

      <h2>Gratulerer med den internasjonale surfedagen!</h2>
      
      <p>For å feire dagen har vi tatt en prat med <strong>João Durão</strong>, vår Head Coach i <strong>Rui Henriques</strong>, vår Head Coach i <a href="/destinasjoner/erleelva" class="text-accent hover:text-accent-dark">Erleelva</a> vil du høre om deres reise i surfingens verden, hva som kjennetegner en ekte surfer, og hva de ville savnet mest hvis bølgene plutselig forsvant.</p>

      <h2>Møt våre surfcoacher</h2>

      <p>Både João og Rui har lang erfaring, de har begge unike reiser som startet for mange år siden.</p>

      <blockquote>
        "Surfing er ikke bare en sport, det er en livsstil. Hver bølge er unik, og det er det som gjør det så fantastisk." - João Durão
      </blockquote>

      <h3>Hva gjør en god surfcoach?</h3>

      <p>En god surfcoach må ha:</p>
      <ul>
        <li>Lidenskap for surfing og havet</li>
        <li>Tålmodighet og evne til å motivere</li>
        <li>Dyp forståelse av bølger og forhold</li>
        <li>Erfaring med ulike nivåer av surfere</li>
      </ul>

      <p>Hos Point Break jobber vi med de beste coachene i Europa, som brenner for å dele sin kunnskap og lidenskap med våre gjester.</p>

      <h2>Bli med oss på eventyr</h2>

      <p>Enten du er nybegynner eller erfaren surfer, har vi det perfekte surfcampet for deg. Våre destinasjoner i Portugal, Frankrike, Spania og Marokko tilbyr noe for alle.</p>
    `
  },
  'surfing-portugal': {
    title: 'Surfing i Portugal: De beste spotene for nybegynnere',
    category: 'REISE',
    date: 'September 5, 2025',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
    content: `
      <p>Portugal er et surferparadis med noen av Europas beste bølger. Fra de varme strendene i Algarve til de kraftige bølgene i Nazaré, har Portugal noe for alle surfere.</p>

      <h2>Hvorfor Portugal?</h2>

      <p>Portugal har blitt et av de mest populære surfedestinasjonene i Europa, og det er ikke uten grunn:</p>

      <ul>
        <li>Over 300 soldager i året</li>
        <li>Konsistente bølger hele året</li>
        <li>Rimelige priser sammenlignet med resten av Europa</li>
        <li>Fantastisk mat og kultur</li>
        <li>Varmt og vennlig lokalbefolkning</li>
      </ul>

      <h2>De beste spotene for nybegynnere</h2>

      <h3>1. Praia da Arrifana</h3>
      <p>En vakker bukt med konsistente bølger perfekt for nybegynnere. Sandbunnen gjør det trygt å lære.</p>

      <h3>2. Baleal</h3>
      <p>Nær Peniche, dette er et av de beste stedene å lære surfing i Portugal. Flere strender med ulike forhold.</p>

      <h3>3. Costa da Caparica</h3>
      <p>Lett tilgjengelig fra Lisboa, perfekt for de som vil kombinere bysightseeing med surfing.</p>

      <blockquote>
        "Portugal har de perfekte forholdene for å lære surfing. Varmt vann, gode bølger og fantastisk stemning!" - Rui Henriques
      </blockquote>

      <p>Bli med Point Break til Portugal og opplev surfeeventyret av ditt liv!</p>
    `
  },
  'surfcamp-frankrike': {
    title: 'Surfcamp i Frankrike: En guide til Atlanterhavskysten',
    category: 'SURF',
    date: 'September 1, 2025',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1600&q=80',
    content: `
      <p>Den franske Atlanterhavskysten er legendarisk blant surfere. Fra Biarritz i sør til Bretagne i nord, strekker kysten seg over hundrevis av kilometer med perfekte surfespots.</p>

      <h2>Frankrike - Europas surfhovedstad</h2>

      <p>Frankrike har en rik surfehistorie og er hjemsted for noen av verdens beste surfere. Kysten tilbyr alt fra rolige bølger for nybegynnere til kraftige beach breaks for erfarne surfere.</p>

      <h3>Hossegor - Surfernes mekka</h3>

      <p>Hossegor er kanskje det mest kjente surfestedet i Frankrike. Byen er vertskap for flere internasjonale surfekonkurranser og har en fantastisk surfkultur.</p>

      <ul>
        <li>Verdensklasse beach breaks</li>
        <li>Livlig surfekultur og natteliv</li>
        <li>Mange surfeskoler og camps</li>
        <li>Perfekt for alle nivåer</li>
      </ul>

      <h3>Biarritz - Elegant og historisk</h3>

      <p>Biarritz er der surfingen i Europa begynte på 1950-tallet. Denne elegante byen kombinerer surfing med sofistikert kultur.</p>

      <blockquote>
        "Å surfe i Frankrike er som å komme hjem. Bølgene, kulturen, maten - alt er perfekt!" - João Durão
      </blockquote>

      <h2>Når er beste tid å besøke?</h2>

      <p>Sommermånedene (juni-september) er best for nybegynnere med varmere vann og mildere bølger. Høsten (september-november) gir de beste bølgene for erfarne surfere.</p>

      <p>Point Break tilbyr surfcamps langs hele den franske kysten. Bli med oss og opplev magien!</p>
    `
  }
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Function to extract headings from HTML content
function extractHeadings(html: string) {
  const headings: { level: number; text: string; id: string }[] = [];
  const h2Regex = /<h2>(.*?)<\/h2>/g;
  const h3Regex = /<h3>(.*?)<\/h3>/g;

  let match;

  // Extract h2 headings
  while ((match = h2Regex.exec(html)) !== null) {
    const text = match[1];
    const id = text.toLowerCase().replace(/[^a-zæøå0-9]+/g, '-').replace(/^-|-$/g, '');
    headings.push({ level: 2, text, id });
  }

  // Extract h3 headings
  while ((match = h3Regex.exec(html)) !== null) {
    const text = match[1];
    const id = text.toLowerCase().replace(/[^a-zæøå0-9]+/g, '-').replace(/^-|-$/g, '');
    headings.push({ level: 3, text, id });
  }

  return headings.sort((a, b) => {
    const aIndex = html.indexOf(`<h${a.level}>${a.text}</h${a.level}>`);
    const bIndex = html.indexOf(`<h${b.level}>${b.text}</h${b.level}>`);
    return aIndex - bIndex;
  });
}

// Function to add IDs to headings in HTML
function addIdsToHeadings(html: string) {
  let result = html;

  // Add IDs to h2
  result = result.replace(/<h2>(.*?)<\/h2>/g, (match, text) => {
    const id = text.toLowerCase().replace(/[^a-zæøå0-9]+/g, '-').replace(/^-|-$/g, '');
    return `<h2 id="${id}">${text}</h2>`;
  });

  // Add IDs to h3
  result = result.replace(/<h3>(.*?)<\/h3>/g, (match, text) => {
    const id = text.toLowerCase().replace(/[^a-zæøå0-9]+/g, '-').replace(/^-|-$/g, '');
    return `<h3 id="${id}">${text}</h3>`;
  });

  return result;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  // Extract headings for table of contents
  const headings = extractHeadings(post.content);

  // Add IDs to headings in content
  const contentWithIds = addIdsToHeadings(post.content);

  // Get related posts (all posts except current one)
  const relatedPosts = Object.entries(blogPosts)
    .filter(([postSlug]) => postSlug !== slug)
    .map(([postSlug, postData]) => ({
      slug: postSlug,
      ...postData
    }))
    .slice(0, 2); // Show only 2 related posts

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      </div>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-6 py-12">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-accent text-white px-4 py-2 text-sm font-bold uppercase tracking-wide">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
          {post.title}
        </h1>

        {/* Date */}
        <p className="mb-8 text-gray-600 uppercase tracking-wide">
          {post.date}
        </p>

        {/* Table of Contents */}
        {headings.length > 0 && (
          <details className="mb-8 border border-gray-300 rounded-lg p-6 bg-white">
            <summary className="font-bold text-lg cursor-pointer hover:text-accent">
              INNHOLDSFORTEGNELSE
            </summary>
            <nav className="mt-4">
              <ul className="space-y-2">
                {headings.map((heading, index) => (
                  <li
                    key={index}
                    className={heading.level === 3 ? 'ml-4' : ''}
                  >
                    <a
                      href={`#${heading.id}`}
                      className="text-gray-700 hover:text-accent transition-colors"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        )}

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-foreground
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent-dark
            prose-strong:text-foreground prose-strong:font-bold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-li:text-gray-700 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-accent 
            prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
            prose-blockquote:my-8"
          dangerouslySetInnerHTML={{ __html: contentWithIds }}
        />
      </article>

      {/* Related Posts Section */}
      <section className="bg-gray-100 py-16 px-6 mt-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Les mer
          </h2>

          {relatedPosts.length > 0 && (
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/reisebrev/${relatedPost.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                      {relatedPost.date}
                    </p>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

