import { PaymentPlans } from "@/utils/payment-plans";

const PaymentPlanCard: React.FC<PaymentPlans> = ({
  period,
  periodLabel,
  price,
  featured,
}) => {
  const pushToTheTop = () => (featured === true ? "max-lg:-order-1" : "");
  const showFeaturedStyle = () =>
    featured === true
      ? "plan-card-featured-before border-violet-500 border-2"
      : "";
  return (
    <div
      className={`relative col-span-1 flex h-72 w-full flex-col items-center justify-around rounded-lg bg-payment-plans-card-gradient p-6
      ${pushToTheTop()}
      ${showFeaturedStyle()}
    `}
    >
      <div className="z-10 text-3xl font-bold text-white">{period}</div>
      <div className="z-10 flex flex-col text-center text-5xl font-bold text-white">
        {price}
        <p className="text-sm font-light">Igual a R$ 24,97 por mês</p>
      </div>
      <button className="btn-secondary z-10 font-semibold max-xl:text-sm">
        ESCOLHA O PLANO {periodLabel}
      </button>
      <div className="hero-video-mask rounded-b-lg" />
    </div>
  );
};

export default PaymentPlanCard;
