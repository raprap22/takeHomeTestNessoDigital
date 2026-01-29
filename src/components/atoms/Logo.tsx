import Image from 'next/image';
import LogoIcon from '../../../public/logoIcon.svg';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src={LogoIcon} alt="Nesso Digitale" height={32} priority />
    </div>
  );
}
