import { ArrowRight } from 'lucide-react';
import Button from '../../components/Button/Button';
import { WHATSAPP_URL } from '../../data/contact';
import styles from './Hero.module.css';

// Foto: Anastase Maragos (Unsplash), convertida para WebP em P&B e em vários tamanhos
import hero1280 from '../../assets/images/hero-1280.webp';
import hero1920 from '../../assets/images/hero-1920.webp';
import hero2560 from '../../assets/images/hero-2560.webp';
import heroPortrait720 from '../../assets/images/hero-portrait-720.webp';
import heroPortrait1080 from '../../assets/images/hero-portrait-1080.webp';

// Números de prova social exibidos abaixo dos CTAs
const HERO_STATS = [
  { value: '+2.000', label: 'alunos ativos' },
  { value: '5h–23h', label: 'de segunda a sexta' },
  { value: '4,9★', label: 'no Google' },
];

function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      {/* Direção de arte: recorte vertical em telas em pé, horizontal nas demais */}
      <picture className={styles.media}>
        <source
          media="(orientation: portrait)"
          srcSet={`${heroPortrait720} 720w, ${heroPortrait1080} 1080w`}
          sizes="100vw"
        />
        {/* Imagem principal da página (LCP): carrega com prioridade, nunca com lazy */}
        <img
          src={hero1920}
          srcSet={`${hero1280} 1280w, ${hero1920} 1920w, ${hero2560} 2560w`}
          sizes="100vw"
          width="1920"
          height="1280"
          alt="Atleta concentrado segurando uma barra antes do levantamento terra"
          fetchPriority="high"
        />
      </picture>

      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>Musculação · Funcional · Cross training</p>

        <h1 id="hero-title" className={styles.title}>
          Forjado na <span className={styles.accent}>rotina.</span>
        </h1>

        <p className={styles.lead}>
          Treino com método, acompanhamento de perto e uma estrutura completa para você evoluir do
          primeiro dia ao seu melhor resultado.
        </p>

        <div className={styles.actions}>
          <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Agendar aula grátis
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button href="#planos" variant="outline">
            Ver planos
          </Button>
        </div>

        {/* dl: cada número (dd) é descrito pelo seu rótulo (dt) */}
        <dl className={styles.stats}>
          {HERO_STATS.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <dt className={styles.statLabel}>{label}</dt>
              <dd className={styles.statValue}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Detalhe gráfico do desktop; decorativo, por isso oculto dos leitores de tela */}
      <p className={styles.sideNote} aria-hidden="true">
        Desde 2014 — Vila Mariana, SP
      </p>
    </section>
  );
}

export default Hero;
