import Image from 'next/image';
import { Button } from '../atoms/Button';
import Icon from '../../../public/image/svg/icon1.svg';

export function CTAButton() {
  return (
    <Button variant="outline" className="mt-11 gap-3 p-4 w-fit" textColor="text-black">
      Prenota una Consulenza
      <span aria-hidden>
        <Image src={Icon} width={11} height={11} alt="" />
      </span>
    </Button>
  );
}
