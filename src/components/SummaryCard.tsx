import { Icon, type IconName } from './Icon';

interface SummaryCardProps {
  label: string;
  value: number;
  helper: string;
  icon: IconName;
  tone: 'blue' | 'green' | 'amber' | 'red';
}

export function SummaryCard({ label, value, helper, icon, tone }: SummaryCardProps) {
  return (
    <article className="summary-card">
      <div className="summary-card__topline">
        <div>
          <span className="eyebrow">{label}</span>
          <strong className="summary-card__value">{value}</strong>
        </div>
        <span className={`summary-card__icon summary-card__icon--${tone}`}>
          <Icon name={icon} size={16} />
        </span>
      </div>
      <p>{helper}</p>
    </article>
  );
}
