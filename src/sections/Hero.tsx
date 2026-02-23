import { motion } from 'framer-motion';

const Hero = () => {
  const phrase = "NO MORE LEGAL CHAOS • ";

  return (
    <section className="relative bg-nomo-red text-nomo-beige pt-20 pb-40 overflow-hidden min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <h2 className="font-montserrat text-sm md:text-2xl font-semibold uppercase tracking-[0.3em] mb-4">
            NOMO legal hub —
          </h2>
          <p className="font-montserrat text-sm md:text-xl leading-tight opacity-90">
            це простір юридичних рішень для бізнесу та фізичних осіб.
          </p>
        </div>
      </div>

      {/* Анімована стрічка (як у Дії) */}
      <div className="absolute bottom-10 left-0 w-full whitespace-nowrap overflow-hidden py-10">
        <motion.div 
          className="flex text-[10vw] font-tenor uppercase leading-none opacity-10 select-none pointer-events-none"
          animate={{ x: [0, -1000] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {/* Повторюємо фразу декілька разів для нескінченного ефекту */}
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mr-8">{phrase}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;