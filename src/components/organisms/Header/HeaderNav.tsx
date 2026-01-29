import { HeaderNavItem } from './HeaderNavItem';
import clsx from 'clsx';

const NAV_ITEMS = [
  { label: 'Home', active: true },
  { label: 'Servizi' },
  { label: 'Settori' },
  { label: 'Metodo di lavoro' },
  { label: 'Chi siamo' },
];

interface HeaderNavProps {
  mobile?: boolean;
  className?: string;
}

export function HeaderNav({ mobile = false, className }: HeaderNavProps) {
  return (
    <nav
      aria-label="Primary navigation"
      className={clsx(
        mobile ? 'flex flex-col gap-2' : 'flex items-center gap-13.5 rounded-full bg-[#F1F1F1] p-1',
        className,
      )}
    >
      {NAV_ITEMS.map((item) => (
        <HeaderNavItem
          key={item.label}
          label={item.label}
          active={item.active}
          fullWidth={mobile}
        />
      ))}
    </nav>
  );
}
