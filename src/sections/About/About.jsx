import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { DIFFERENTIALS, METHOD_STEPS } from '../../data/about';
import styles from './About.module.css';

function About() {
  return (
    <section id="sobre" className="section" aria-labelledby="sobre-title">
      <div className="container">
        {/* Apresentação: título de um lado, manifesto da marca do outro */}
        <div className={styles.intro}>
          <SectionHeader
            number="02"
            eyebrow="Sobre a FORJA"
            title="Mais que uma academia. Um método."
            titleId="sobre-title"
          />

          <div className={styles.manifesto}>
            <p className={styles.statement}>
              Nascemos em 2014 com uma ideia simples: resultado não vem de sorte, vem de rotina bem
              feita.
            </p>
            <p>
              Na FORJA, cada aluno tem um plano, um professor por perto e metas que dá para medir.
              Do iniciante ao atleta, o caminho é o mesmo: começar do jeito certo e evoluir com
              consistência.
            </p>
          </div>
        </div>

        {/* Diferenciais em cards com ícone */}
        <ul role="list" className={styles.differentials}>
          {DIFFERENTIALS.map(({ icon: Icon, title, text }) => (
            <li key={title} className={styles.differential}>
              <span className={styles.iconBox}>
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className={styles.differentialTitle}>{title}</h3>
              <p className={styles.differentialText}>{text}</p>
            </li>
          ))}
        </ul>

        {/* Metodologia: lista ordenada, pois a sequência das etapas importa */}
        <div className={styles.method}>
          <h3 className={styles.methodTitle}>Como funciona o método FORJA</h3>

          <ol role="list" className={styles.steps}>
            {METHOD_STEPS.map(({ title, text }) => (
              <li key={title} className={styles.step}>
                <h4 className={styles.stepTitle}>{title}</h4>
                <p className={styles.stepText}>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default About;
