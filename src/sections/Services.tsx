import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const servicesData = [
  {
    title: "Бізнес-клієнти",
    subtitle: "Юридичні особи та ФОП",
    items: [
      "Абонентське юридичне обслуговування (аутсорс юридичного відділу)",
      "Превентивний юридичний аудит документації на відповідність законодавству",
      "Представництво в судах та державних органах",
      "Розробка та аналіз договорів, інструкцій та внутрішніх положень",
      "Захист інтересів бізнесу при податкових та митних перевірках",
      "Супровід у отриманні статусу критичності та бронюванні працівників"
    ]
  },
  {
    title: "Військове право",
    subtitle: "Військові, ветерани та їхні сім'ї",
    items: [
      "Складання звернень, скарг та позовних заяв",
      "Захист прав військових у судах та перед МО/ТЦК",
      "Супровід питань звільнення та отримання соціального забезпечення",
      "Оформлення відстрочок від мобілізації згідно з чинним законодавством",
      "Встановлення фактів народження та смерті на тимчасово окупованих територіях"
    ]
  },
  {
    title: "Фізичні особи",
    subtitle: "Цивільні, сімейні та майнові справи",
    items: [
      "Сімейне право: розлучення, поділ майна, аліменти, шлюбні договори",
      "Спадкове право: оформлення спадщини, суди, договори утримання",
      "Житлові та майнові спори: право власності, супровід угод з нерухомістю",
      "Трудове право: поновлення на роботі, стягнення боргів по зарплаті",
      "Міграційне право: посвідки на проживання, підтвердження громадянства",
      "Захист у судах: представництво, захист честі та гідності, стягнення боргів",
      "Консультації: правовий аналіз, підготовка запитів та оформлення документів"
    ]
  }
];

export const Services = () => {
  // ТУТ ВИПРАВЛЕНО: додано типізацію <number | null>
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="bg-nomo-beige text-nomo-red py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-tenor text-4xl md:text-5xl uppercase mb-20 text-center">
          Наші послуги
        </h2>

        <div className="border-t border-nomo-red/20">
          {servicesData.map((cat, i) => (
            <div key={i} className="border-b border-nomo-red/20">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex flex-col md:flex-row md:items-center justify-between text-left group transition-all"
              >
                <div>
                  <h3 className="font-tenor text-2xl md:text-3xl uppercase group-hover:pl-4 transition-all duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50 mt-1 group-hover:pl-4 transition-all duration-300">
                    {cat.subtitle}
                  </p>
                </div>
                
                <div className="mt-4 md:mt-0 text-3xl font-light opacity-30">
                  {openIndex === i ? "—" : "+"}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="pb-10 space-y-4 md:pl-4">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-4">
                          <span className="mt-2 w-1 h-1 flex-shrink-0 rounded-full bg-nomo-red/40" />
                          <p className="font-montserrat text-sm md:text-base leading-relaxed opacity-80 uppercase tracking-wide">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};