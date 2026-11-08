import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Modalities from './sections/Modalities/Modalities';
import Facilities from './sections/Facilities/Facilities';
import Plans from './sections/Plans/Plans';
import Testimonials from './sections/Testimonials/Testimonials';
import CtaBanner from './sections/CtaBanner/CtaBanner';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';

// Monta a página na ordem do funil: atenção → confiança → oferta → prova → ação
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Modalities />
        <Facilities />
        <Plans />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
