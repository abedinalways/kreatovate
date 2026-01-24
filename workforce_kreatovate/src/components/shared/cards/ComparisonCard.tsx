import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Item {
  icon: ReactNode;
  label: string;
}

interface ComparisonCardProps {
  tag: string;
  title: string;
  items: Item[];
  className?: string;
  badgeClassName?: string;
  iconClassName?: string;
}

export default function ComparisonCard({
  tag,
  title,
  items,
  className,
  badgeClassName,
  iconClassName,
}: ComparisonCardProps) {
  return (
    <div
      className={cn('rounded-[24px] border p-6 backdrop-blur-xl font-jakarta', className)}
    >
      <Badge
        variant="secondary"
        className={cn(
          'mb-4 px-3 py-1 text-xs md:text-sm font-medium font-[arimo]',
          badgeClassName,
        )}
      >
        {tag}
      </Badge>

      <h3 className="text-2xl md:text-[30px] font-semibold mb-6">{title}</h3>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-sm md:text-md">
            <span
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-[14px]',
                iconClassName,
              )}
            >
              {item.icon}
            </span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
