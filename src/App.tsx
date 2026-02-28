import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Секції головної сторінки
import Hero from './sections/Hero';
import About from './sections/About';
import { Team } from './sections/Team';
import { Services } from './sections/Services';
import Contacts from './sections/Contacts';
import Partners from './sections/Partners';

// Сторінка блогу (яку ми робили раніше)
import Blog from './sections/Blog'; 

// 1. Створюємо компонент Головної сторінки
const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Team />
      <Services />
      <Partners />
      <Contacts />
    </main>
  );
};

// 2. Головний App з роутингом
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-nomo-red text-nomo-beige selection:bg-nomo-beige selection:text-nomo-red flex flex-col">
        {/* Шапка на всіх сторінках */}
        <Navbar />
        
        {/* Роутер перемикає контент між шапкою і футером */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>

        {/* Футер на всіх сторінках */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;