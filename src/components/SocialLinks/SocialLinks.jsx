import BrandIcon from '../BrandIcon/BrandIcon';
import { SOCIAL_LINKS } from '../../data/contact';
import styles from './SocialLinks.module.css';

// Lista de redes sociais, reutilizada na seção Contato e no rodapé
function SocialLinks({ className = '' }) {
  return (
    <ul role="list" className={`${styles.list} ${className}`}>
      {SOCIAL_LINKS.map(({ label, url, icon }) => (
        <li key={label}>
          {/* aria-label dá nome ao link, já que o conteúdo visível é só o ícone */}
          <a
            href={url}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} da FORJA (abre em nova aba)`}
          >
            <BrandIcon icon={icon} size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
