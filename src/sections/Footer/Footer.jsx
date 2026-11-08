import Logo from '../../components/Logo/Logo';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { NAV_LINKS } from '../../data/navigation';
import { CONTACT, OPENING_HOURS } from '../../data/contact';
import styles from './Footer.module.css';

// Crédito de desenvolvimento: troque pelo seu nome e portfólio
const DEVELOPER = { name: 'Seu Nome', url: 'https://github.com/' };

function Footer() {
  // Ano calculado na renderização: o rodapé nunca fica desatualizado
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>
            Academia de performance na Vila Mariana. Treino com método, do primeiro dia ao seu
            melhor resultado.
          </p>
          <SocialLinks />
        </div>

        {/* Navegação repetida no rodapé: quem chega ao fim não precisa voltar ao topo */}
        <nav aria-label="Rodapé">
          <h2 className={styles.title}>Navegação</h2>
          <ul role="list" className={styles.links}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.link}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.title}>Contato</h2>
          <ul role="list" className={styles.links}>
            <li>{CONTACT.street}</li>
            <li>
              <a href={CONTACT.phoneHref} className={styles.link}>
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className={styles.link}>
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>Horários</h2>
          <ul role="list" className={styles.links}>
            {OPENING_HOURS.map(({ days, hours }) => (
              <li key={days}>
                {days}: {hours}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Barra final com direitos e crédito */}
      <div className={`container ${styles.bottom}`}>
        <p>© {year} FORJA Performance. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{' '}
          <a
            href={DEVELOPER.url}
            className={styles.credit}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DEVELOPER.name}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
