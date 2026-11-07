import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import { NAV_LINKS } from '../../data/navigation';
import { WHATSAPP_URL } from '../../data/contact';
import styles from './Header.module.css';

// Rolagem (em px) a partir da qual o header ganha fundo
const SCROLL_THRESHOLD = 24;

// Mesmo valor da media query desktop do Header.module.css
const DESKTOP_QUERY = '(min-width: 1024px)';

// Props comuns aos links que abrem o WhatsApp em nova aba
const whatsappLinkProps = {
  href: WHATSAPP_URL,
  target: '_blank',
  rel: 'noopener noreferrer',
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Lê a posição inicial para o caso de a página recarregar já rolada
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > SCROLL_THRESHOLD);
  const toggleRef = useRef(null);

  // Alterna o visual do header conforme a rolagem
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu quando a tela cresce até o layout desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY);
    const handleChange = (event) => {
      if (event.matches) setIsMenuOpen(false);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Com o menu aberto: trava a rolagem da página e permite fechar com Esc
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    // Limpeza: roda ao fechar o menu ou ao desmontar o componente
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  // Fundo sólido ao rolar ou com o menu aberto, para garantir contraste
  const headerClasses = [styles.header, (isScrolled || isMenuOpen) && styles.solid]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClasses}>
      <div className={`container ${styles.inner}`}>
        <Logo className={styles.logo} />

        {/* Vem antes do nav no HTML para o Tab seguir direto para os links ao abrir o menu */}
        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={isMenuOpen}
          aria-controls="menu-principal"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        {/* Um único nav: painel em tela cheia no mobile, linha horizontal no desktop */}
        <nav
          id="menu-principal"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label="Menu principal"
        >
          <ul role="list" className={styles.navList}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.navLink} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA grande no fim do menu mobile, oculto no desktop */}
          <Button {...whatsappLinkProps} className={styles.navCta}>
            Agendar aula grátis
          </Button>
        </nav>

        {/* CTA compacto na barra, visível a partir de 480px */}
        <Button {...whatsappLinkProps} size="sm" className={styles.headerCta}>
          Aula grátis
        </Button>
      </div>
    </header>
  );
}

export default Header;
