import { Check } from 'lucide-react';
import Button from '../../components/Button/Button';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { PLANS } from '../../data/plans';
import { buildWhatsAppUrl } from '../../data/contact';
import styles from './Plans.module.css';

function Plans() {
  return (
    // section-light troca os tokens de cor: fundo claro sem reescrever nenhum componente
    <section id="planos" className="section section-light" aria-labelledby="planos-title">
      <div className="container">
        <SectionHeader
          number="05"
          eyebrow="Planos"
          title="Escolha como quer evoluir"
          titleId="planos-title"
          description="Todos os planos incluem avaliação física e acompanhamento de professores. Sem letras miúdas."
          className={styles.header}
        />

        <ul role="list" className={styles.list}>
          {PLANS.map(({ name, tagline, price, billing, featured, benefits }) => (
            <li key={name} className={`${styles.card} ${featured ? styles.featured : ''}`}>
              {featured && <p className={styles.badge}>Mais escolhido</p>}

              <h3 className={styles.name}>{name}</h3>
              <p className={styles.tagline}>{tagline}</p>

              {/* Preço visual para os olhos e texto completo para leitores de tela */}
              <p className={styles.price}>
                <span className="visually-hidden">
                  R$ {price.reais},{price.cents} por mês
                </span>
                <span aria-hidden="true">
                  <span className={styles.currency}>R$</span>
                  <span className={styles.amount}>{price.reais}</span>
                  <span className={styles.cents}>,{price.cents}</span>
                  <span className={styles.period}>/mês</span>
                </span>
              </p>
              <p className={styles.billing}>{billing}</p>

              <ul role="list" className={styles.benefits}>
                {benefits.map((benefit) => (
                  <li key={benefit} className={styles.benefit}>
                    <Check size={18} className={styles.check} aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Mensagem já identifica o plano, o atendimento começa sabendo o interesse */}
              <Button
                href={buildWhatsAppUrl(`Olá! Tenho interesse no plano ${name} da FORJA.`)}
                target="_blank"
                rel="noopener noreferrer"
                variant={featured ? 'primary' : 'outline'}
                className={styles.cta}
              >
                Quero o plano {name}
              </Button>
            </li>
          ))}
        </ul>

        <p className={styles.note}>
          Valores por mês. Taxa de matrícula de R$ 59,90 nos planos Mensal e Anual.
        </p>
      </div>
    </section>
  );
}

export default Plans;
