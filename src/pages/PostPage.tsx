/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client, urlFor } from '../sanityClient';
import { PortableText } from '@portabletext/react';

interface PostData {
  title: string;
  mainImage: any; 
  body: any[]; 
  publishedAt: string;
}

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage,
      body,
      publishedAt
    }`;
    client.fetch(query, { slug }).then(setPost);
  }, [slug]);

  if (!post) return <div className="py-40 text-center font-montserrat uppercase tracking-widest opacity-50">Завантаження...</div>;

  return (
    <article className="py-40 px-6 container mx-auto max-w-4xl bg-nomo-beige text-nomo-red min-h-screen">
      <h1 className="text-4xl md:text-5xl font-tenor mb-8 uppercase tracking-widest leading-tight">
        {post.title}
      </h1>
      
      {post.mainImage && (
        <div className="mb-12 overflow-hidden border border-nomo-red/10">
          <img 
            src={urlFor(post.mainImage).url()} 
            className="w-full h-auto object-cover" 
            alt={post.title} 
          />
        </div>
      )}

      {/* 2. Виводимо реальний текст через PortableText */}
      <div className="prose prose-lg font-montserrat leading-relaxed opacity-90 max-w-none">
        {post.body ? (
          <PortableText value={post.body} />
        ) : (
          <p>Ця стаття ще не має текстового наповнення.</p>
        )}
      </div>
    </article>
  );
};

export default PostPage;