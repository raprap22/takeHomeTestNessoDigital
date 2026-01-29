import { Logo } from '@/components/atoms/Logo';
import { Typography } from '@/components/atoms/Typography';
import SosmedIcon from '../../../../public/image/svg/icon3.1.svg';
import Image from 'next/image';

export function FooterInfo() {
  return (
    <div className="flex max-w-sm flex-col gap-5 items-start">
      <Logo />

      <Typography size="lg" as="span">
        Costruiamo soluzioni digitali che semplificano il lavoro, un progetto alla volta.
      </Typography>

      <Image src={SosmedIcon} alt="Social media" className="h-5 w-auto" />
    </div>
  );
}
