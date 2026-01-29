import Image from 'next/image';
import ImageGlobe from '../../../../public/image/svg/asset1.svg';

export function WelcomingVisual() {
  return (
    <div className="relative flex w-full justify-center lg:w-[50%] lg:justify-end lg:top-14">
      <Image
        src={ImageGlobe}
        alt="3D Globe"
        width={599}
        height={599}
        priority
        className="relative z-10"
      />
    </div>
  );
}
