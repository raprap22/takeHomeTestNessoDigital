import clsx from 'clsx';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  px?: string;
  py?: string;
}

export function Container({ children, className, px = 'px-21', py = '0' }: ContainerProps) {
  return (
    <div className={clsx('mx-auto w-full px-4 sm:px-6', className, `lg:${px}`)}>{children}</div>
  );
}
