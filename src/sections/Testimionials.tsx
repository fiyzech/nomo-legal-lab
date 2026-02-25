import { motion } from 'framer-motion';

/**
 * @interface Testimonial
 * Описує структуру об'єкта відгуку
 */
interface Testimonial {
  text: string;
  author: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    text: "NOMO допомогли нам з реструктуризацією активів. Професіоналізм та увага до деталей на найвищому рівні.",
    author: "Андрій Морозов",
    company: "Tech Solutions CEO"
  },
  {
    text: "Найкращий досвід роботи з юристами у Львові. Все чітко, без зайвої води та хаосу.",
    author: "Олена Кравченко",
    company: "Creative Studio"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-nomo-beige text-nomo-red py-32 px-6 border-t border-nomo-red/5">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-tenor text-3xl uppercase mb-20 text-center tracking-widest">
          Результати нашої роботи
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Велика лапка як декоративний елемент */}
              <span className="absolute -top-10 -left-6 text-8xl font-tenor opacity-10">“</span>
              
              <p className="font-montserrat text-xl italic leading-relaxed mb-8 relative z-10">
                {item.text}
              </p>
              
              <div>
                <p className="font-tenor uppercase tracking-widest text-sm">{item.author}</p>
                <p className="font-montserrat text-xs opacity-50 uppercase mt-1">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;