export const Team = () => {
  const teamMembers = [
    {
      n: "Ольга ЛИСЕНКО",
      r: "Юрист, адвокат",
      img: "olga.jpeg",
      edu: "Національний юридичний університет імені Ярослава Мудрого, магістр права",
      langs: "Українська, Англійська",
      exp: "Військове право і мобілізація, критичність підприємств, бронювання працівників, військовий облік, банкрутство та неплатоспроможність"
    },
    {
      n: "Марія ШИРА",
      r: "Юрист, адвокат",
      img: "maria.jpeg",
      edu: "Львівський національний університет імені Івана Франка, магістр права.",
      langs: "Українська, Польська",
      exp: "Корпоративне, цивільне та адміністративне право, питання, які виникають з приводу податкових, митних, кредитних, трудових відносин, супровід операцій з нерухомістю, захист прав власності, договірна робота, судове представництво."},
    {
      n: "Катерина ЛАЛАК",
      r: "Юрист, помічник адвоката",
      img: "kate.jpg",
      edu: "Львівський національний університет імені Івана Франка, магістр права.",
      langs: "Українська, Англійська",
      exp: "Cімейне, міграційне, корпоративне та договірне право, супровід поділу майна, оформлення міграційних документів, корпоративне структурування та захист бізнесу."
    }
  ];

  return (
    <section id="team" className="bg-nomo-red text-nomo-beige py-32 px-6 border-t border-nomo-beige/10">
      <div className="container mx-auto">
        <h2 className="font-tenor text-4xl uppercase mb-20 text-center lg:text-left">Наша команда</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
          {teamMembers.map((m, i) => (
            <div key={i} className="group flex flex-col h-full">
              {/* Фото */}
              <div className="aspect-[4/5] overflow-hidden mb-8 bg-nomo-beige/5">
                <img 
                  src={m.img} 
                  alt={m.n}
                  className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                />
              </div>
              
              {/* ПІБ та Посада */}
              <div className="mb-6">
                <h4 className="font-tenor text-2xl uppercase leading-tight mb-2">{m.n}</h4>
                <p className="text-xs opacity-60 uppercase tracking-[0.2em] font-medium">{m.r}</p>
              </div>

              {/* Детальна інформація */}
              <div className="space-y-6 flex-grow border-t border-nomo-beige/20 pt-6">
                <div>
                  <h5 className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Експертність:</h5>
                  <p className="text-sm leading-relaxed font-light">{m.exp}</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Освіта:</h5>
                    <p className="text-xs leading-snug">{m.edu}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Мови:</h5>
                    <p className="text-xs">{m.langs}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};