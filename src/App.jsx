import Header from './sections/Header/Header';

// Seções provisórias para testar a navegação; serão substituídas nas próximas etapas
const PLACEHOLDER_SECTIONS = [
  'inicio',
  'sobre',
  'modalidades',
  'estrutura',
  'planos',
  'depoimentos',
  'contato',
];

function App() {
  return (
    <>
      <Header />
      <main>
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
