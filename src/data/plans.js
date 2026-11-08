// Planos exibidos na seção de preços; featured marca o plano em destaque
export const PLANS = [
  {
    name: 'Mensal',
    tagline: 'Para começar sem compromisso',
    price: { reais: '149', cents: '90' },
    billing: 'Sem fidelidade',
    benefits: [
      'Musculação e treinamento funcional',
      'Avaliação física inicial',
      'Acesso em todo o horário de funcionamento',
      'Treino montado por professor',
    ],
  },
  {
    name: 'Semestral',
    tagline: 'O equilíbrio ideal entre preço e resultado',
    price: { reais: '119', cents: '90' },
    billing: 'Recorrente no cartão por 6 meses',
    featured: true,
    benefits: [
      'Todas as modalidades, incluindo cross training e Muay Thai',
      'Reavaliação física a cada 8 semanas',
      'Acesso em todo o horário de funcionamento',
      'Isenção da taxa de matrícula',
    ],
  },
  {
    name: 'Anual',
    tagline: 'Para quem fez do treino um hábito',
    price: { reais: '99', cents: '90' },
    billing: 'Recorrente no cartão por 12 meses',
    benefits: [
      'Tudo do plano Semestral',
      'Congelamento do plano por até 60 dias',
      'Traga um amigo para treinar 1x por mês',
      'Kit de boas-vindas FORJA',
    ],
  },
];
