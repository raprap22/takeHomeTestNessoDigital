import clsx from 'clsx';

interface Props {
  label: string;
  active?: boolean;
  fullWidth?: boolean;
}

export function HeaderNavItem({ label, active, fullWidth }: Props) {
  return (
    <button
      className={clsx(
        'rounded-full px-4 py-3 text-sm font-medium transition-colors',
        active ? 'text-[#232323]' : 'text-gray-600 hover:text-black',

        fullWidth && 'w-full text-left',
      )}
    >
      {label}
    </button>
  );
}
