import LayoutWrapper from './components/LayoutWrapper';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <LayoutWrapper>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Footer />
    </LayoutWrapper>
  );
}

export default App;
