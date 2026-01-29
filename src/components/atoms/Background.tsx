import Image from 'next/image';
import BgVector from '../../../public/image/svg/asset1.7.svg';
import clsx from 'clsx';

interface BackgroundProps {
  className?: string;
  usingDivider?: boolean;
}

export function Background({ className, usingDivider = true }: BackgroundProps) {
  return (
    <>
      <Image
        src={BgVector}
        alt="background grid"
        fill
        className={clsx(className || 'mt-38.5 ml-120 pointer-events-none scale-[1.35]')}
        priority
      />

      {usingDivider && (
        <div className="absolute w-full top-90.25 border-[0.5px] border-[#D9D9D9]" />
      )}
    </>
  );
}
