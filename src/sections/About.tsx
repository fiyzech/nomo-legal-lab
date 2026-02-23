import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-nomo-beige text-nomo-red py-32 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="font-tenor text-4xl md:text-5xl uppercase leading-tight">
            Ми перетворюємо складні юридичні процеси на зрозумілу стратегію
          </h3>
        </motion.div>
        
        <div className="font-montserrat text-lg leading-relaxed opacity-80 space-y-4">
          <p>
            Ми об’єднуємо досвідчених юристів та адвокатів, які працюють у
            динамічних і складних сферах права: військове, корпоративне,
            договірне, трудове, господарське, банкрутство, інтелектуальна
            власність та захист бізнесу у спорах.
          </p>
          <p>
            Працюємо з фізичними особами, малим і середнім бізнесом,
            стартапами, українськими та міжнародними компаніями,
            благодійними фондами та громадськими організаціями.
          </p>
          <button className="mt-4 border-b border-nomo-red pb-1 font-bold hover:opacity-60 transition">
            Дізнатись більше про команду →
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;