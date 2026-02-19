import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-nomo-red text-nomo-beige font-montserrat border-b border-nomo-beige/10">
      <div className="flex justify-between items-center px-6 md:px-12 py-6">
        {/* Логотип */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="border border-nomo-beige w-8 h-8 flex items-center justify-center">
            <span className="font-tenor text-xl">N</span>
          </div>
          <span className="font-tenor text-[8px] tracking-[0.4em] uppercase mt-1">Nomo</span>
        </div>

        {/* Десктопне меню */}
        <div className="hidden lg:flex gap-10 text-[10px] uppercase tracking-widest font-medium">
          {['Послуги', 'Про нас', 'Команда', 'Контакти'].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-white/60 transition">
              {item}
            </a>
          ))}
        </div>

        {/* Бургер для мобілки */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <button className="hidden lg:block border border-nomo-beige/40 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-nomo-beige hover:text-nomo-red transition-all">
          Запис на консультацію
        </button>
      </div>

      {/* Мобільна панель */}
      {isOpen && (
        <div className="lg:hidden bg-nomo-red h-screen w-full flex flex-col items-center justify-center gap-8 text-2xl font-tenor uppercase">
          {['Послуги', 'Про нас', 'Команда', 'Контакти'].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setIsOpen(false)}>{item}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;