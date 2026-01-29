import { Typography } from '@/components/atoms/Typography';
import { MENU } from '@/data/data';

export function FooterContact() {
  return (
    <div className="flex flex-col items-start gap-5">
      <Typography size="lg" as="span" className="w-102 font-bold">
        Contatti
      </Typography>
      <Typography as="span" className="font-light w-102 underline[#2F3042] text-[16px]">
        Support@mail.com
      </Typography>
      <Typography as="span" className="font-light w-69 text-[16px]">
        Modulo LTD, Golden Plaza, 7 Nile Street, Cairo EG2R 6DA
      </Typography>
    </div>
  );
}
