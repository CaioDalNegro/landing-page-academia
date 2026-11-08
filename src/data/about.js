import { ClipboardCheck, Clock, Dumbbell, Users } from 'lucide-react';

// Diferenciais da academia; o ícone é guardado como componente para ser renderizado na seção
export const DIFFERENTIALS = [
  {
    icon: ClipboardCheck,
    title: 'Avaliação completa',
    text: 'Bioimpedância, testes de mobilidade e entrevista de objetivos antes do primeiro treino.',
  },
  {
    icon: Users,
    title: 'Professor no salão',
    text: 'Equipe presente em todos os horários para corrigir a execução e ajustar a carga.',
  },
  {
    icon: Dumbbell,
    title: 'Equipamentos de ponta',
    text: 'Máquinas biomecânicas, área de peso livre e espaço exclusivo para cross training.',
  },
  {
    icon: Clock,
    title: 'Das 5h às 23h',
    text: 'Horário estendido nos dias úteis e aberto também aos sábados, domingos e feriados.',
  },
];

// Etapas da metodologia, exibidas em sequência numerada
export const METHOD_STEPS = [
  {
    title: 'Avaliar',
    text: 'Entendemos seu ponto de partida: corpo, histórico, rotina e objetivo.',
  },
  {
    title: 'Planejar',
    text: 'Montamos um treino sob medida, com metas claras para cada fase.',
  },
  {
    title: 'Evoluir',
    text: 'Reavaliamos a cada 8 semanas e ajustamos o plano conforme seu progresso.',
  },
];
