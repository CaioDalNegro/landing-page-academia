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
