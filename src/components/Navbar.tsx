import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Допоміжна функція, щоб правильно генерувати лінки
  const getLink = (item: string) => {
    if (item === 'Блог') return '/blog'; // Блог веде на нову сторінку
    return `/#${item.toLowerCase()}`;    // Все інше веде на головну до якорів
  };

  return (
    <nav className="fixed w-full z-50 bg-nomo-red text-nomo-beige font-montserrat border-b border-nomo-beige/10">
      <div className="flex justify-between md:justify-start items-center px-6 md:px-12 py-4">
        
        {/* Логотип-картинка */}
        <div className="flex items-center cursor-pointer">
          <a href="/">
            <img 
              src="/logo_nomo.png" 
              alt="NOMO" 
              className="h-[60px] md:h-[80px] w-auto object-contain" 
            />
          </a>
        </div>

        {/* Десктопне меню */}
        <div className="hidden lg:flex gap-10 ml-16 text-[14px] uppercase tracking-widest font-medium">
          {['Послуги', 'Про нас', 'Команда', 'Блог', 'Контакти'].map((item) => (
            <a 
              key={item} 
              href={getLink(item)} // Використовуємо нашу функцію
              className="hover:text-white/60 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Бургер для мобілки */}
        <div className="lg:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Кнопка */}
        <button className="hidden lg:block ml-auto border border-nomo-beige/40 px-6 py-3 text-[11px] uppercase tracking-widest hover:bg-nomo-beige hover:text-nomo-red transition-all">
          Запис на консультацію
        </button>
      </div>

      {/* Мобільна панель */}
      {isOpen && (
        <div className="lg:hidden bg-nomo-red h-screen w-full flex flex-col items-center justify-center gap-8 text-2xl font-tenor uppercase fixed top-0 left-0 z-40">
           <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6">
            <X size={32} />
          </button>
          {['Послуги', 'Про нас', 'Команда', 'Блог', 'Контакти'].map((item) => (
            <a 
              key={item} 
              href={getLink(item)} // Використовуємо нашу функцію
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;