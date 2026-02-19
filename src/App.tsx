import Navbar from './components/Navbar';
import Hero from './sections/Hero';

function App() {
  return (
    <div className="min-h-screen bg-nomo-red selection:bg-nomo-beige selection:text-nomo-red">
      <Navbar />
      <main>
        <Hero />
        {/* Тут будуть інші секції */}
      </main>
    </div>
  );
}

export default App;