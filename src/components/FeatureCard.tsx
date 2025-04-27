
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
    <div 
      className={cn(
        "feature-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-masar-primary/10",
        className
      )}
    >
      <div className="mb-6 text-masar-primary transform transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-masar-dark">{title}</h3>
      <p className="text-masar-gray text-lg leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
