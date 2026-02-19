const services = [
  { title: "Корпоративне право", desc: "Реєстрація бізнесу, структурування та супровід угод." },
  { title: "IT & IP Law", desc: "Захист авторських прав, торговельні марки та договори для IT." },
  { title: "Судові спори", desc: "Представництво інтересів у судах всіх інстанцій." },
  { title: "Податковий консалтинг", desc: "Оптимізація оподаткування та аудит ризиків." },
];

const Services = () => {
  return (
    <section className="bg-nomo-beige text-nomo-red py-24 px-6 md:px-16 border-t border-nomo-red/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group border border-nomo-red/20 p-8 h-80 flex flex-col justify-between hover:bg-nomo-red hover:text-nomo-beige transition-all duration-500 cursor-pointer"
            >
              <h4 className="font-ten font-tenor text-2xl uppercase tracking-tight leading-none">
                {service.title}
              </h4>
              <p className="font-montserrat text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;