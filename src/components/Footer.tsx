import { Instagram } from 'lucide-react'; // Залишив тільки інсту, бо інші ти прибрав

const Footer = () => {
  return (
    <footer className="bg-nomo-red text-nomo-beige border-t border-nomo-beige/10 pt-8 pb-4 font-montserrat">
      {/* Додав relative, щоб іконка орієнтувалася по цьому контейнеру */}
      <div className="container mx-auto px-6 md:px-12 relative">
        
        {/* Іконка Instagram (Верхній правий кут) */}
        <div className="absolute top-0 right-6 md:right-12">
          <a 
            href="https://www.instagram.com/nomo.legal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noreferrer"
            className="hover:opacity-60 transition-opacity block"
          >
            <Instagram size={24} />
          </a>
        </div>

        {/* Верхня частина: Колонки */}
        {/* Додав mt-2, щоб дати трохи простору під іконку на мобілках */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8 mt-2">
          
          {/* Колонка 1: Бренд */}
          {/* Додав pr-10 на випадок дрібних екранів, щоб текст не наліз на іконку */}
          <div className="lg:col-span-2 pr-10 md:pr-0">
            <div className="flex items-center gap-3 mb-4">
              {/* Міні-лого */}
              <div className="border border-nomo-beige w-8 h-8 flex items-center justify-center">
                <span className="font-tenor text-[16px] leading-none pt-1">N</span>
              </div>
              <span className="font-tenor text-[14px] tracking-[0.2em] uppercase pl-[0.2em]">NOMO</span>
            </div>
            {/* Текст жорстко 16px, як ти виправив */}
            <p className="text-[16px] opacity-80 max-w-sm leading-relaxed">
              Простір юридичних рішень для бізнесу та фізичних осіб. Ми створюємо порядок там, де інші бачать хаос.
            </p>
          </div>

          {/* Колонка 2: Навігація в 2 колонки */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 opacity-50">
              Навігація
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[12px] font-medium">
              {['Послуги', 'Про нас', 'Команда', 'Блог', 'Контакти'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:opacity-60 transition-opacity whitespace-nowrap">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка 3: Контакти */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 opacity-50">
              Зв'язок
            </h4>
            <ul className="flex flex-col gap-2 text-[12px]">
              <li>
                <a href="tel:+380977007101" className="hover:opacity-60 transition-opacity">
                  +380 97 700 71 01
                </a>
              </li>
              <li>
                <a href="mailto:nomo.legalhub@gmail.com" className="hover:opacity-60 transition-opacity">
                  nomo.legalhub@gmail.com
                </a>
              </li>
              <li className="opacity-80">
                м. Львів, вул. Франка, 98
              </li>
            </ul>
            {/* Іконку звідси забрали */}
          </div>

        </div>

        {/* Нижня частина */}
        <div className="border-t border-nomo-beige/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] opacity-50 font-medium tracking-wide">
          <p>© {new Date().getFullYear()} NOMO Legal Hub. Всі права захищено.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Політика конфіденційності</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Умови надання послуг</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;