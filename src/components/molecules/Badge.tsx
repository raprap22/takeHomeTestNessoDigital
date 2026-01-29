import { Typography } from '../atoms/Typography';

type BadgeProps = {
  title: string;
};

export function Badge({ title }: BadgeProps) {
  return (
    <div className="px-7 py-2.25 bg-[#F1F1F1] font-body rounded-full text-center">
      <Typography as="span" size="base">
        {title}
      </Typography>
    </div>
  );
}
