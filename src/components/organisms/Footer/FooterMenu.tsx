import { Typography } from '@/components/atoms/Typography';
import { MENU } from '@/data/data';

export function FooterMenu() {
  return (
    <div className="flex flex-col items-start gap-5">
      <Typography size="lg" as="span" className="w-102 font-bold">
        Menus
      </Typography>
      <div className="grid grid-cols-2">
        {MENU.map((menu) => (
          <Typography key={menu} as="span" className='underline font-light text-[16px]'>
            {menu}
          </Typography>
        ))}
      </div>
    </div>
  );
}
