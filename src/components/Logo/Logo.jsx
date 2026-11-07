import styles from './Logo.module.css';

// Marca da academia: símbolo em SVG + nome em texto real (melhor para SEO e leitores de tela)
function Logo({ className = '' }) {
  return (
    <a
      href="#inicio"
      className={`${styles.logo} ${className}`}
      aria-label="FORJA Performance, voltar ao início"
    >
      {/* "F" inclinado formado por três barras, com o mesmo ângulo dos cortes diagonais do site */}
      <svg className={styles.mark} viewBox="0 0 32 32" aria-hidden="true">
        <path d="M4 28h5l6-24h-5z" />
        <path d="M10 4h18l-1.25 5h-18z" />
        <path d="M7.5 14H22l-1.25 5H6.25z" />
      </svg>

      <span className={styles.name}>
        Forja
        <span className={styles.tagline}>Performance</span>
      </span>
    </a>
  );
}

export default Logo;
