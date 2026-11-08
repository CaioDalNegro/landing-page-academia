import { siWhatsapp } from 'simple-icons';
import BrandIcon from '../../components/BrandIcon/BrandIcon';
import Button from '../../components/Button/Button';
import { WHATSAPP_URL } from '../../data/contact';
import styles from './CtaBanner.module.css';

// Última chamada antes do contato: para quem rolou a página inteira e ainda não agiu
function CtaBanner() {
  return (
    <section className={styles.banner} aria-labelledby="cta-title">
      <div className={`container ${styles.content}`}>
        <h2 id="cta-title" className={styles.title}>
          Sua primeira aula é por nossa conta.
        </h2>
        <p className={styles.text}>
          Conheça a estrutura, treine com um professor e descubra o plano certo para você. Sem
          compromisso.
        </p>
        <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="dark">
          <BrandIcon icon={siWhatsapp} size={18} />
          Agendar pelo WhatsApp
        </Button>
      </div>
    </section>
  );
}

export default CtaBanner;
