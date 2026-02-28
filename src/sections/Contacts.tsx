import { useState, useRef } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = "service_67g6yv8"; 
    const TEMPLATE_ID = "template_no5tro4"; 
    const PUBLIC_KEY = "ON_AkPMws6qLqDSsR";   

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
          setStatus('success');
          formRef.current?.reset(); 
          setTimeout(() => setStatus('idle'), 5000);
        })
        .catch((error) => {
          console.error('Помилка відправки:', error);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
        });
    }
  };

  return (
    <section id="контакти" className="bg-nomo-beige text-nomo-red py-32 px-6 md:px-16 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Контактна інформація */}
        <div className="z-10">
          <h2 className="font-tenor text-5xl uppercase mb-8">Готові почати?</h2>
          <p className="font-montserrat text-lg mb-12 opacity-80 max-w-md">
            Залиште заявку, і ми зв’яжемося з вами протягом 30 хвилин для первинної консультації.
          </p>
          <div className="space-y-4 font-montserrat font-medium uppercase text-sm tracking-widest">
            <a href="tel:+380977007101" className="block hover:opacity-70 transition-opacity">
              +380 (97) 700-71-01
            </a>
            <a href="mailto:nomo.legalhub@gmail.com" className="block hover:opacity-70 transition-opacity">
              nomo.legalhub@gmail.com
            </a>
            <p className="opacity-60">м. Львів, вул. Франка, 98</p>
          </div>
        </div>

        {/* Форма зворотного зв'язку */}
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6 z-10">
          <input 
            required
            name="name" 
            type="text" 
            placeholder="Ім'я" 
            /* ВИПРАВЛЕНО: border-nomo-red, focus:border-nomo-red, placeholder:text-nomo-red */
            className="bg-transparent border-b border-nomo-red/30 py-4 focus:border-nomo-red outline-none font-montserrat placeholder:text-nomo-red/50 text-nomo-red transition-colors" 
          />
          <input 
            required
            name="email" 
            type="email" 
            placeholder="Email / Телефон" 
            /* ВИПРАВЛЕНО: border-nomo-red, focus:border-nomo-red, placeholder:text-nomo-red */
            className="bg-transparent border-b border-nomo-red/30 py-4 focus:border-nomo-red outline-none font-montserrat placeholder:text-nomo-red/50 text-nomo-red transition-colors" 
          />
          <textarea 
            required
            name="message" 
            placeholder="Ваш запит" 
            rows={4} 
            /* ВИПРАВЛЕНО: border-nomo-red, focus:border-nomo-red, placeholder:text-nomo-red */
            className="bg-transparent border-b border-nomo-red/30 py-4 focus:border-nomo-red outline-none font-montserrat resize-none placeholder:text-nomo-red/50 text-nomo-red transition-colors"
          ></textarea>
          
          <button 
            disabled={status === 'sending'}
            className={`
              relative py-5 uppercase tracking-[0.3em] text-xs font-bold transition-all duration-300 border border-nomo-red
              ${status === 'success' ? 'bg-green-700 text-white border-green-700' : 'bg-nomo-red text-nomo-beige hover:bg-transparent hover:text-nomo-red'}
              ${status === 'sending' ? 'opacity-50 cursor-wait' : 'active:scale-[0.97]'}
            `}
          >
            {status === 'idle' && 'Надіслати запит'}
            {status === 'sending' && 'Відправка...'}
            {status === 'success' && 'Дякуємо! Надіслано'}
            {status === 'error' && 'Помилка. Спробуйте ще'}
          </button>
        </form>

        {/* Декоративний текст на фоні */}
        <div className="absolute -bottom-10 -left-10 font-tenor text-[15vw] uppercase opacity-5 pointer-events-none select-none">
          NOMO
        </div>
      </div>
    </section>
  );
};

export default Contact;