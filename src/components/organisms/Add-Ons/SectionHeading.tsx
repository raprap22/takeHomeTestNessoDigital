import { Typography, TypographySize } from '@/components/atoms/Typography';
import { Divider } from '@/components/atoms/Divider';

type SectionHeadingProps = {
  title: string;
  description?: string;
  isDoubleLine?: boolean;
  sizeDescription?: TypographySize;
};

export function SectionHeading({
  title,
  description,
  isDoubleLine = false,
  sizeDescription,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 w-full lg:flex-row lg:items-start lg:justify-between">
      <div className="relative max-w-xl">
        <Typography as="h1" size="4xl" className="font-bold relative z-10">
          {title}
        </Typography>

        <Divider
          width="w-24 lg:w-42.25"
          height="h-1.5"
          bgColor="bg-[#0B5ED7]"
          top={isDoubleLine ? '-top-1 lg:-top-12' : '-top-2'}
          right="right-0"
        />
      </div>

      {description && (
        <Typography as="span" className="max-w-xl" size={sizeDescription || 'xl'}>
          {description}
        </Typography>
      )}
    </div>
  );
}
