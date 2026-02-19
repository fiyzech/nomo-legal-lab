import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-8 bg-nomo-red text-nomo-beige font-montserrat">
      {/* Логотип */}
      <div className="flex flex-col items-center group cursor-pointer">
        <div className="border border-nomo-beige w-10 h-10 flex items-center justify-center mb-1 group-hover:bg-nomo-beige group-hover:text-nomo-red transition-all duration-300">
          <span className="font-tenor text-2xl">N</span>
        </div>
        <span className="font-tenor text-[10px] tracking-[0.4em] uppercase">Nomo</span>
      </div>

      {/* Меню */}
      <div className="hidden lg:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium">
        {['Послуги', 'Про нас', 'Команда', 'Контакти'].map((item) => (
          <a key={item} href={`#${item}`} className="hover:opacity-60 transition-opacity">
            {item}
          </a>
        ))}
      </div>

      {/* Кнопка */}
      <button className="border border-nomo-beige/40 px-5 py-2 text-[10px] uppercase tracking-widest hover:bg-nomo-beige hover:text-nomo-red transition-all duration-500">
        Запис на консультацію
      </button>
    </nav>
  );
};

export default Navbar;