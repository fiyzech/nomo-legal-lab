import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import {Team} from './sections/Team';
import {Services} from './sections/Services';
import Contacts from './sections/Contacts';
import Partners from './sections/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-nomo-red selection:bg-nomo-beige selection:text-nomo-red">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Team/>
        <Services/>
        <Contacts/>
        <Partners/>
        <Footer/>
        {/* Тут будуть інші секції */}
      </main>
    </div>
  );
}

export default App;