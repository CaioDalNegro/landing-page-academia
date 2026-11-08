// Fotos do Unsplash (licença livre), convertidas para WebP em P&B no formato 4:5
import musculacao480 from '../assets/images/modalities/musculacao-480.webp';
import musculacao800 from '../assets/images/modalities/musculacao-800.webp';
import funcional480 from '../assets/images/modalities/funcional-480.webp';
import funcional800 from '../assets/images/modalities/funcional-800.webp';
import cross480 from '../assets/images/modalities/cross-480.webp';
import cross800 from '../assets/images/modalities/cross-800.webp';
import muayThai480 from '../assets/images/modalities/muay-thai-480.webp';
import muayThai800 from '../assets/images/modalities/muay-thai-800.webp';
import coletivas480 from '../assets/images/modalities/coletivas-480.webp';
import coletivas800 from '../assets/images/modalities/coletivas-800.webp';

// Cada modalidade guarda as duas larguras da foto para o srcset
export const MODALITIES = [
  {
    title: 'Musculação',
    tag: 'Força e hipertrofia',
    description:
      'Treino individualizado com acompanhamento no salão para ganhar força, massa muscular e condicionamento.',
    image: { small: musculacao480, large: musculacao800 },
    alt: 'Aluno em posição de levantamento terra com anilhas na barra',
  },
  {
    title: 'Funcional',
    tag: 'Condicionamento',
    description:
      'Movimentos naturais com peso livre, corda e medicine ball para mais agilidade e resistência no dia a dia.',
    image: { small: funcional480, large: funcional800 },
    alt: 'Alunos treinando com medicine ball e corda de pular',
  },
  {
    title: 'Cross training',
    tag: 'Alta intensidade',
    description:
      'Aulas em grupo com treinos variados que combinam força, ginástica e cardio em sessões desafiadoras.',
    image: { small: cross480, large: cross800 },
    alt: 'Atleta arremessando uma medicine ball acima da cabeça',
  },
  {
    title: 'Muay Thai',
    tag: 'Luta e cardio',
    description:
      'A arte marcial tailandesa para gastar energia, ganhar confiança e aprender técnica do básico ao avançado.',
    image: { small: muayThai480, large: muayThai800 },
    alt: 'Dois lutadores treinando chutes de Muay Thai',
  },
  {
    title: 'Aulas coletivas',
    tag: 'Para todas as idades',
    description:
      'Alongamento, mobilidade e ritmos em turmas acolhedoras para quem gosta de treinar em grupo.',
    image: { small: coletivas480, large: coletivas800 },
    alt: 'Turma fazendo exercícios com elásticos guiada por um professor',
  },
];
