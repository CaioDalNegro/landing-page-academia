import styles from './SectionHeader.module.css';

// Cabeçalho padrão das seções: numeração + rótulo, título e texto de apoio opcional
function SectionHeader({ number, eyebrow, title, titleId, description, className = '' }) {
  return (
    <header className={`${styles.header} ${className}`}>
      <p className={styles.eyebrow}>
        <span className={styles.number}>{number}</span>
        {eyebrow}
      </p>

      {/* titleId permite que a seção aponte para este título com aria-labelledby */}
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>

      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}

export default SectionHeader;
