import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Team from './sections/Team';
import Contacts from './sections/Contacts';
import Testimonials from './sections/Testimionials';

function App() {
  return (
    <div className="min-h-screen bg-nomo-red selection:bg-nomo-beige selection:text-nomo-red">
      <Navbar />
      <main>
        <Hero />
        <Services/>
        <About/>
        <Team/>
        <Contacts/>
        <Testimonials/>
        {/* Тут будуть інші секції */}
      </main>
    </div>
  );
}

export default App;