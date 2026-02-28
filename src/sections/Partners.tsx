import { motion } from 'framer-motion';

/**
 * @interface Partner
 */
interface Partner {
  id: string | number;
  name: string;
  logoUrl: string; 
  websiteUrl?: string; 
}

const mockPartners: Partner[] = [
  { id: 1, name: "Finance Group", logoUrl: "" },
  { id: 2, name: "Tech Invest", logoUrl: "" },
  { id: 3, name: "Build Corp", logoUrl: "" },
  { id: 4, name: "Global Trade", logoUrl: "" },
];

const Partners = () => {
  return (
    <section className="bg-nomo-red text-nomo-beige py-32 px-6 border-t border-nomo-beige/5">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-tenor text-3xl uppercase mb-20 text-center tracking-widest"
        >
          Наші партнери
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {mockPartners.map((partner, index) => (
            <motion.div 
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-center justify-center group"
            >
              {partner.websiteUrl ? (
                <a 
                  href={partner.websiteUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  /* ВИПРАВЛЕНО: border-nomo-beige/10, hover:border-nomo-beige/40, bg-nomo-beige/5 */
                  className="w-full aspect-video flex items-center justify-center border border-nomo-beige/10 hover:border-nomo-beige/40 transition-colors bg-nomo-beige/5"
                >
                  <PartnerLogo partner={partner} />
                </a>
              ) : (
                /* ВИПРАВЛЕНО КОЛЬОРИ ТУТ ТАКОЖ */
                <div className="w-full aspect-video flex items-center justify-center border border-nomo-beige/10 bg-nomo-beige/5 grayscale hover:grayscale-0 transition-all duration-300">
                  <PartnerLogo partner={partner} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerLogo = ({ partner }: { partner: Partner }) => {
  if (partner.logoUrl) {
    return (
      <img 
        src={partner.logoUrl} 
        alt={`Логотип ${partner.name}`} 
        className="max-h-12 max-w-[80%] object-contain opacity-50 group-hover:opacity-100 transition-opacity"
      />
    );
  }
  
  return (
    <span className="font-montserrat text-xs md:text-sm font-semibold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity text-center px-2">
      {partner.name}
    </span>
  );
};

export default Partners;