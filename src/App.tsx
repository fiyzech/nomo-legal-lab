import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PostPage from './pages/postPage';

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} /> 
        {/* Динамічний роут для кожної статті */}
        <Route path="/blog/:slug" element={<PostPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;