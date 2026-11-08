import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { FACILITY_FEATURES, GALLERY } from '../../data/facilities';
import styles from './Facilities.module.css';

// Largura aproximada de cada foto no mosaico; a principal ocupa mais espaço
const SIZES = {
  large: '(min-width: 1024px) 66vw, 100vw',
  small: '(min-width: 1024px) 33vw, 50vw',
};

function Facilities() {
  return (
    <section id="estrutura" className="section" aria-labelledby="estrutura-title">
      <div className="container">
        {/* Título e números da estrutura lado a lado no desktop */}
        <div className={styles.intro}>
          <SectionHeader
            number="04"
            eyebrow="Estrutura"
            title="Espaço feito para treinar sério"
            titleId="estrutura-title"
            description="Ambiente amplo, ventilado e organizado por áreas, para você treinar sem fila e sem improviso."
          />

          <dl className={styles.features}>
            {FACILITY_FEATURES.map(({ value, label }) => (
              <div key={label} className={styles.feature}>
                <dt className={styles.featureLabel}>{label}</dt>
                <dd className={styles.featureValue}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Mosaico: a posição de cada foto vem do nome da área no CSS */}
        <ul role="list" className={styles.gallery}>
          {GALLERY.map(({ area, caption, alt, srcSet, src, width, height }) => (
            <li key={area} className={styles.tile} style={{ gridArea: area }}>
              <figure className={styles.figure}>
                <img
                  className={styles.image}
                  src={src}
                  srcSet={srcSet}
                  sizes={area === 'salao' ? SIZES.large : SIZES.small}
                  width={width}
                  height={height}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className={styles.caption}>{caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Facilities;
