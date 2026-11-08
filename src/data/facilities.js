// Fotos do Unsplash (licença livre), convertidas para WebP em P&B
import salao800 from '../assets/images/facilities/salao-800.webp';
import salao1400 from '../assets/images/facilities/salao-1400.webp';
import racks480 from '../assets/images/facilities/racks-480.webp';
import racks800 from '../assets/images/facilities/racks-800.webp';
import halteres480 from '../assets/images/facilities/halteres-480.webp';
import halteres800 from '../assets/images/facilities/halteres-800.webp';
import maquinas480 from '../assets/images/facilities/maquinas-480.webp';
import maquinas800 from '../assets/images/facilities/maquinas-800.webp';
import barras480 from '../assets/images/facilities/barras-480.webp';
import barras800 from '../assets/images/facilities/barras-800.webp';

// Números da estrutura exibidos ao lado do título
export const FACILITY_FEATURES = [
  { value: '1.200 m²', label: 'de área de treino' },
  { value: '+80', label: 'equipamentos' },
  { value: '2', label: 'salas de aulas coletivas' },
  { value: '60', label: 'vagas de estacionamento' },
];

// area: nome usado no grid-template-areas do CSS para posicionar cada foto no mosaico
export const GALLERY = [
  {
    area: 'salao',
    caption: 'Salão principal',
    alt: 'Salão da academia com pé-direito alto, bancos e racks de musculação',
    srcSet: `${salao800} 800w, ${salao1400} 1400w`,
    src: salao1400,
    width: 1400,
    height: 933,
  },
  {
    area: 'racks',
    caption: 'Racks e peso livre',
    alt: 'Fileira de racks de agachamento com anilhas coloridas',
    srcSet: `${racks480} 480w, ${racks800} 800w`,
    src: racks800,
    width: 800,
    height: 1200,
  },
  {
    area: 'halteres',
    caption: 'Halteres de 2 a 50 kg',
    alt: 'Suporte com halteres sextavados enfileirados',
    srcSet: `${halteres480} 480w, ${halteres800} 800w`,
    src: halteres800,
    width: 800,
    height: 1200,
  },
  {
    area: 'maquinas',
    caption: 'Área de máquinas',
    alt: 'Área de máquinas de musculação com iluminação linear no teto',
    srcSet: `${maquinas480} 480w, ${maquinas800} 800w`,
    src: maquinas800,
    width: 800,
    height: 600,
  },
  {
    area: 'barras',
    caption: 'Plataforma de levantamento',
    alt: 'Barras olímpicas com anilhas apoiadas no piso emborrachado',
    srcSet: `${barras480} 480w, ${barras800} 800w`,
    src: barras800,
    width: 800,
    height: 533,
  },
];
