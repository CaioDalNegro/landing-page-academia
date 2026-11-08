import { siWhatsapp } from 'simple-icons';
import BrandIcon from '../BrandIcon/BrandIcon';
import { WHATSAPP_URL } from '../../data/contact';
import { useScrolledPast } from '../../hooks/useScrolledPast';
import styles from './WhatsAppFloat.module.css';

// Distância de rolagem para o botão aparecer: no topo, o Hero já tem o CTA principal
const SHOW_AFTER = 600;

// Atalho fixo para o WhatsApp, o principal canal de conversão de academias no Brasil
function WhatsAppFloat() {
  const isVisible = useScrolledPast(SHOW_AFTER);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.float} ${isVisible ? styles.visible : ''}`}
      aria-label="Conversar com a FORJA no WhatsApp (abre em nova aba)"
    >
      <BrandIcon icon={siWhatsapp} size={28} />
    </a>
  );
}

export default WhatsAppFloat;
