import { siFacebook, siInstagram, siTiktok } from 'simple-icons';

// Número fictício no formato exigido pelo wa.me: país + DDD + número, só dígitos
const WHATSAPP_NUMBER = '5511999999999';

// Monta o link do WhatsApp com qualquer mensagem já preenchida
export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Link padrão usado nos CTAs de aula experimental
export const WHATSAPP_URL = buildWhatsAppUrl(
  'Olá! Quero agendar minha aula experimental gratuita na FORJA.',
);

// Dados fictícios de contato, usados na seção Contato e no rodapé
export const CONTACT = {
  phone: '(11) 99999-9999',
  phoneHref: 'tel:+5511999999999',
  email: 'contato@forjaperformance.com.br',
  street: 'Rua Domingos de Morais, 1500',
  district: 'Vila Mariana, São Paulo – SP',
  zip: 'CEP 04010-100',
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Rua Domingos de Morais, 1500, São Paulo')}`,
};

// Fonte única dos horários: os textos do site devem concordar com esta tabela
export const OPENING_HOURS = [
  { days: 'Segunda a sexta', hours: '5h às 23h' },
  { days: 'Sábado', hours: '7h às 20h' },
  { days: 'Domingo e feriados', hours: '8h às 14h' },
];

// Redes sociais: ícones de marca vêm do simple-icons (a lucide não inclui logos)
export const SOCIAL_LINKS = [
  { label: 'Instagram', url: 'https://www.instagram.com/', icon: siInstagram },
  { label: 'Facebook', url: 'https://www.facebook.com/', icon: siFacebook },
  { label: 'TikTok', url: 'https://www.tiktok.com/', icon: siTiktok },
];
