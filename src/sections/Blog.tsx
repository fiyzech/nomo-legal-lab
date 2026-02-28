/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// Перевір, щоб шлях до sanityClient був правильним (../ якщо він у папці src)
import { client, urlFor } from '../sanityClient'; 

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: string;
  mainImage: Record<string, any> | null;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Запит GROQ: беремо останні 3 пости
    const query = `
      *[_type == "post"] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug,
        publishedAt,
        mainImage,
        "category": categories[0]->title
      }
    `;

    client.fetch(query)
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <section id="блог" className="bg-nomo-beige text-nomo-red py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Шапка */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-tenor text-3xl md:text-4xl uppercase tracking-widest mb-4"
            >
              Блог
            </motion.h2>
            <p className="font-montserrat text-sm opacity-80 max-w-md">
              Експертні статті та актуальні юридичні новини від команди NOMO.
            </p>
          </div>
          
          <Link 
            to="/blog" 
            className="flex items-center gap-2 font-montserrat text-[11px] uppercase tracking-widest font-semibold hover:opacity-60 transition-opacity pb-1 border-b border-nomo-red/30"
          >
            Всі статті <ArrowRight size={14} />
          </Link>
        </div>

        {isLoading ? (
          <div className="text-center py-20 font-montserrat uppercase tracking-widest text-sm opacity-50">
            Завантаження статей...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              /* Крок 1: Огортаємо всю картку в Link для переходу */
              <Link to={`/blog/${post.slug.current}`} key={post._id} className="group block">
                <motion.article 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex flex-col h-full"
                >
                  {/* Обкладинка */}
                  <div className="relative aspect-[4/3] overflow-hidden mb-6 border border-nomo-red/10">
                    {post.mainImage && (
                      <img 
                        /* Крок 2: Використовуємо 'as any' для методу width */
                        src={(urlFor(post.mainImage) as any).width(800).url()} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    {post.category && (
                      <div className="absolute top-4 left-4 bg-nomo-beige/90 px-3 py-1 text-[10px] uppercase tracking-widest font-semibold">
                        {post.category}
                      </div>
                    )}
                  </div>

                  {/* Дата: Форматуємо красиво */}
                  <time className="font-montserrat text-[11px] opacity-60 mb-3 tracking-wider uppercase">
                    {post.publishedAt 
                      ? new Date(post.publishedAt).toLocaleDateString('uk-UA', {
                          year: 'numeric', month: 'long', day: 'numeric'
                        })
                      : "Дата не вказана"}
                  </time>

                  {/* Заголовок */}
                  <h3 className="font-tenor text-xl md:text-2xl leading-snug mb-3 group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h3>

                  <p className="font-montserrat text-sm opacity-80 leading-relaxed mb-6 flex-grow">
                    Натисніть, щоб прочитати повний текст статті...
                  </p>

                  <div className="mt-auto flex items-center gap-2 font-montserrat text-[11px] uppercase tracking-widest font-semibold text-nomo-red/70 group-hover:text-nomo-red">
                    Читати статтю <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;