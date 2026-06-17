import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Photography from './components/Photography';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Photography />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-text">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
