import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Modalities from './sections/Modalities/Modalities';

// Seções provisórias para testar a navegação; serão substituídas nas próximas etapas
const PLACEHOLDER_SECTIONS = ['estrutura', 'planos', 'depoimentos', 'contato'];

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Modalities />
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
