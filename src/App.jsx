import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Modalities from './sections/Modalities/Modalities';
import Facilities from './sections/Facilities/Facilities';
import Plans from './sections/Plans/Plans';

// Seções provisórias para testar a navegação; serão substituídas nas próximas etapas
const PLACEHOLDER_SECTIONS = ['depoimentos', 'contato'];

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
        {PLACEHOLDER_SECTIONS.map((id) => (
          <section
            key={id}
            id={id}
            className="container"
            style={{ minHeight: '100svh', paddingTop: 'var(--header-height)' }}
          >
            <h2>{id}</h2>
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
