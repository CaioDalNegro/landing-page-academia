import { ArrowRight } from 'lucide-react';
import Button from '../../components/Button/Button';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { MODALITIES } from '../../data/modalities';
import { WHATSAPP_URL } from '../../data/contact';
import styles from './Modalities.module.css';

// Largura que cada foto ocupa na tela, para o navegador escolher o arquivo certo do srcset
const IMAGE_SIZES = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 80vw';

function Modalities() {
  return (
    <section id="modalidades" className="section" aria-labelledby="modalidades-title">
      <div className="container">
        <SectionHeader
          number="03"
          eyebrow="Modalidades"
          title="Um treino para cada objetivo"
          titleId="modalidades-title"
          description="Força, condicionamento, luta ou treino em grupo: escolha por onde começar e combine modalidades no mesmo plano."
        />

        {/* Carrossel no celular: tabIndex permite rolar pelo teclado */}
        <div
          className={styles.scroller}
          role="region"
          aria-label="Lista de modalidades"
          tabIndex={0}
        >
          <ul role="list" className={styles.list}>
            {MODALITIES.map(({ title, tag, description, image, alt }) => (
              <li key={title} className={styles.item}>
                <article className={styles.card}>
                  {/* Abaixo da dobra: lazy adia o download até a imagem se aproximar da tela */}
                  <img
                    className={styles.image}
                    src={image.large}
                    srcSet={`${image.small} 480w, ${image.large} 800w`}
                    sizes={IMAGE_SIZES}
                    width="800"
                    height="1000"
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <p className={styles.tag}>{tag}</p>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.description}>{description}</p>
                </article>
              </li>
            ))}

            {/* Último card fecha a lista com uma chamada para quem ainda está em dúvida */}
            <li className={styles.item}>
              <div className={`${styles.card} ${styles.ctaCard}`}>
                <p className={styles.tag}>Ainda em dúvida?</p>
                <h3 className={styles.cardTitle}>Não sabe por onde começar?</h3>
                <p className={styles.description}>
                  Faça uma aula experimental grátis e nossos professores indicam o melhor caminho
                  para o seu objetivo.
                </p>
                <Button
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  Agendar aula grátis
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Modalities;
