import { Typography, TypographySize } from '@/components/atoms/Typography';
import { WORDING_GLOBAL } from '@/types/type';
import clsx from 'clsx';

type SectionListProps = WORDING_GLOBAL & {
  width?: number;
  titleSize?: TypographySize;
  titleDescription?: TypographySize;
};

export function SectionList({
  title,
  description,
  width,
  titleSize,
  titleDescription,
}: SectionListProps) {
  return (
    <div
      className="flex flex-col gap-2 max-w-prose"
      style={width ? { maxWidth: `${width}px` } : undefined}
    >
      <Typography as="h3" size={titleSize || '2xl'} className="font-semibold hover:text-[#0B5ED7]">
        {title}
      </Typography>

      <Typography as="p" size={titleDescription || 'base'} className="text-gray-600">
        {description}
      </Typography>
    </div>
  );
}
