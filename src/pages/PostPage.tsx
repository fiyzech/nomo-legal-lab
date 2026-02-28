/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor } from '../sanityClient';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

interface PostData {
  title: string;
  mainImage: any;
  body: any[];
  publishedAt: string;
  category: string;
}

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    // Запит GROQ: шукаємо статтю за її slug
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage,
      body,
      publishedAt,
      "category": categories[0]->title
    }`;
    
    client.fetch(query, { slug }).then(setPost).catch(console.error);
    window.scrollTo(0, 0); // Прокрутка вгору при відкритті
  }, [slug]);

  if (!post) return <div className="py-40 text-center font-tenor uppercase tracking-widest">Завантаження...</div>;

  return (
    <main className="bg-nomo-beige min-h-screen pt-32 pb-20 px-6">
      <article className="container mx-auto max-w-3xl">
        
        {/* Кнопка назад */}
        <Link to="/#блог" className="flex items-center gap-2 text-nomo-red/60 hover:text-nomo-red transition-colors mb-12 font-montserrat text-xs uppercase tracking-widest font-bold">
          <ArrowLeft size={16} /> Назад до списку
        </Link>

        {/* Мета-дані */}
        <div className="flex flex-wrap gap-6 mb-8 items-center text-[10px] uppercase tracking-[0.2em] font-bold text-nomo-red/50">
          <span className="flex items-center gap-2"><Calendar size={12} /> {new Date(post.publishedAt).toLocaleDateString('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          {post.category && <span className="flex items-center gap-2"><Tag size={12} /> {post.category}</span>}
        </div>

        {/* Заголовок */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-tenor text-nomo-red leading-[1.1] mb-12 uppercase tracking-tight">
          {post.title}
        </h1>

        {/* Головне зображення */}
        {post.mainImage && (
          <div className="mb-16 border border-nomo-red/10 overflow-hidden shadow-sm">
            <img 
              src={urlFor(post.mainImage).url()} 
              alt={post.title} 
              className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
            />
          </div>
        )}

        {/* Текст статті (Rich Text) */}
        <div className="prose prose-nomo font-montserrat text-nomo-red leading-relaxed text-lg opacity-90">
          <PortableText value={post.body} />
        </div>

      </article>
    </main>
  );
};

export default PostPage;