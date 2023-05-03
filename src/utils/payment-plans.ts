export type PaymentPlans = {
  period: string;
  periodLabel: string;
  price: string;
  featured: boolean;
};

export const PAYMENT_PLANS: PaymentPlans[] = [
  {
    period: '3 meses',
    periodLabel: 'TRIMESTRAL',
    price: 'R$ 74,90',
    featured: false,
  },
  {
    period: '12 meses',
    periodLabel: 'ANUAL',
    price: 'R$ 239,90',
    featured: true,
  },
  {
    period: '1 mês',
    periodLabel: 'MENSAL',
    price: 'R$ 34,90',
    featured: false,
  },
];
