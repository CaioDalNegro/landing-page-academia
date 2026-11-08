import { Quote, Star } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { TESTIMONIALS } from '../../data/testimonials';
import styles from './Testimonials.module.css';

// Iniciais do nome para o avatar: "Mariana Costa" vira "MC"
function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

// Cinco estrelas como uma única imagem com texto alternativo
function Rating() {
  return (
    <div className={styles.stars} role="img" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section id="depoimentos" className="section" aria-labelledby="depoimentos-title">
      <div className="container">
        {/* Título e nota média lado a lado no desktop */}
        <div className={styles.intro}>
          <SectionHeader
            number="06"
            eyebrow="Depoimentos"
            title="Quem treina, recomenda"
            titleId="depoimentos-title"
          />

          <p className={styles.score}>
            <span className={styles.scoreValue}>4,9</span>
            <span className={styles.scoreText}>
              <Rating />
              Média de 380 avaliações no Google
            </span>
          </p>
        </div>

        <ul role="list" className={styles.list}>
          {TESTIMONIALS.map(({ name, meta, result, quote }) => (
            <li key={name}>
              {/* figure agrupa a citação (blockquote) com a autoria (figcaption) */}
              <figure className={styles.card}>
                <Quote size={32} className={styles.quoteIcon} aria-hidden="true" />
                <p className={styles.result}>{result}</p>

                <blockquote className={styles.quote}>
                  <p>{quote}</p>
                </blockquote>

                <figcaption className={styles.author}>
                  {/* Iniciais em vez de foto: nunca usar rosto de banco de imagens em depoimento */}
                  <span className={styles.avatar} aria-hidden="true">
                    {getInitials(name)}
                  </span>
                  <span>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.meta}>{meta}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
