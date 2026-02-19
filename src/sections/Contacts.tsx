const Contact = () => {
  return (
    <section id="Контакти" className="bg-nomo-beige text-nomo-red py-32 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-tenor text-5xl uppercase mb-8">Готові почати?</h2>
          <p className="font-montserrat text-lg mb-12 opacity-80">
            Залиште заявку, і ми зв’яжемося з вами протягом 30 хвилин для первинної консультації.
          </p>
          <div className="space-y-4 font-montserrat font-medium uppercase text-sm tracking-widest">
            <p>Львів, вул. Коперника, 12</p>
            <p>+380 97 000 00 00</p>
            <p>hello@nomo.legal</p>
          </div>
        </div>

        <form className="flex flex-col gap-6">
          <input type="text" placeholder="Ім'я" className="bg-transparent border-b border-nomo-red/30 py-4 focus:border-nomo-red outline-none font-montserrat" />
          <input type="email" placeholder="Email" className="bg-transparent border-b border-nomo-red/30 py-4 focus:border-nomo-red outline-none font-montserrat" />
          <textarea placeholder="Ваш запит" rows={4} className="bg-transparent border-b border-nomo-red/30 py-4 focus:border-nomo-red outline-none font-montserrat resize-none"></textarea>
          <button className="bg-nomo-red text-nomo-beige py-5 uppercase tracking-[0.3em] text-xs font-bold hover:opacity-90 transition">
            Надіслати запит
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;