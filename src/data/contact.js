// Número fictício no formato exigido pelo wa.me: país + DDD + número, só dígitos
const WHATSAPP_NUMBER = '5511999999999';
const WHATSAPP_MESSAGE = 'Olá! Quero agendar minha aula experimental gratuita na FORJA.';

// Abre a conversa no WhatsApp com a mensagem já preenchida
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
