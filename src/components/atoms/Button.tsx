import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  textColor?: string;
  isCircle?: boolean;
  className?: string;
}

export function Button({
  variant = 'primary',
  textColor = '',
  isCircle = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        className,
        'inline-flex items-center justify-center text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        isCircle ? 'rounded-full w-12 h-12 p-0' : 'rounded-full px-6.5 py-3',
        variant === 'primary' && ['bg-blue-600 hover:bg-blue-700', textColor || 'text-white'],
        variant === 'outline' && [
          'border border-blue-600 hover:bg-blue-50',
          textColor || 'text-blue-600',
        ],
      )}
      {...props}
    />
  );
}
