
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div className={cn("feature-card flex flex-col items-center text-center", className)}>
      <div className="mb-4 text-masar-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-masar-gray">{description}</p>
    </div>
  );
};

export default FeatureCard;
