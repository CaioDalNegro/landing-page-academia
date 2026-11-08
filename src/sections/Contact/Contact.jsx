import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { siWhatsapp } from 'simple-icons';
import BrandIcon from '../../components/BrandIcon/BrandIcon';
import Button from '../../components/Button/Button';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { CONTACT, OPENING_HOURS, WHATSAPP_URL } from '../../data/contact';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contato" className="section" aria-labelledby="contato-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.info}>
          <SectionHeader
            number="07"
            eyebrow="Localização e contato"
            title="Venha conhecer a FORJA"
            titleId="contato-title"
          />

          {/* Endereço: <address> marca as informações de contato da empresa */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>
              <MapPin size={18} aria-hidden="true" />
              Endereço
            </h3>
            <address className={styles.address}>
              {CONTACT.street}
              <br />
              {CONTACT.district}
              <br />
              {CONTACT.zip}
            </address>
          </div>

          {/* Horários em lista de definição: dia (dt) e horário (dd) */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>
              <Clock size={18} aria-hidden="true" />
              Horários
            </h3>
            <dl className={styles.hours}>
              {OPENING_HOURS.map(({ days, hours }) => (
                <div key={days} className={styles.hoursRow}>
                  <dt>{days}</dt>
                  <dd>{hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Links tel: e mailto: abrem o discador e o e-mail direto no celular */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>
              <Phone size={18} aria-hidden="true" />
              Fale com a gente
            </h3>
            <ul role="list" className={styles.channels}>
              <li>
                <a href={CONTACT.phoneHref} className={styles.channel}>
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className={styles.channel}>
                  <Mail size={16} aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <SocialLinks className={styles.social} />
          </div>

          <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <BrandIcon icon={siWhatsapp} size={18} />
            Chamar no WhatsApp
          </Button>
        </div>

        {/*
          Mapa ilustrado em CSS em vez do iframe do Google Maps:
          carrega instantaneamente e o link abre o mapa real no app do usuário
        */}
        <a
          href={CONTACT.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.map}
          aria-label="Abrir endereço da FORJA no Google Maps (abre em nova aba)"
        >
          <span className={styles.mapPin} aria-hidden="true">
            <MapPin size={28} />
          </span>
          <span className={styles.mapCard}>
            <strong>FORJA Performance</strong>
            {CONTACT.street}
            <span className={styles.mapAction}>Abrir no Google Maps →</span>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
