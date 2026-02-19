const Team = () => {
  const members = [
    { name: "Олександр Н.", role: "Керуючий партнер", photo: "https://via.placeholder.com/400x500" },
    { name: "Марія В.", role: "Head of IP Law", photo: "https://via.placeholder.com/400x500" },
    { name: "Дмитро К.", role: "Старший юрист", photo: "https://via.placeholder.com/400x500" },
  ];

  return (
    <section id="Команда" className="bg-nomo-red py-32 px-6 md:px-16 text-nomo-beige">
      <div className="container mx-auto">
        <h2 className="font-tenor text-4xl uppercase mb-16 tracking-tight">Команда експертів</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {members.map((person, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/5] bg-nomo-beige/5 mb-6">
                <img src={person.photo} alt={person.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="font-tenor text-xl uppercase">{person.name}</h4>
              <p className="font-montserrat text-xs opacity-60 uppercase tracking-widest mt-2">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;