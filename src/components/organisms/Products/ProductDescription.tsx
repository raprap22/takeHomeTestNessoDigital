import { Badge } from '@/components/molecules/Badge';
import { SectionList } from '../Add-Ons/SectionList';
import { Button } from '@/components/atoms/Button';

export function ProductDescription() {
  return (
    <div className="flex flex-col items-start gap-10">
      <SectionList
        width={430}
        titleDescription='xl'
        title="AC Milan App"
        description="An official mobile experience crafted to bring fans closer to the club through performance-driven design and intuitive interaction."
      />

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between w-full">
        <Badge title="Official App Milan" />

        <div className="flex flex-row gap-3 justify-center">
          <Button
            variant="outline"
            isCircle
            className="group border-[#636363]! hover:border-none hover:bg-[#0B5ED7]!"
          >
            <span className="inline-block w-3 h-3 border-r border-b border-[#636363] rotate-135 group-hover:border-white" />
          </Button>

          <Button
            variant="outline"
            isCircle
            className="group border-[#636363]! hover:border-none hover:bg-[#0B5ED7]!"
          >
            <span className="inline-block w-3 h-3 border-r border-b border-[#636363] -rotate-45 group-hover:border-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
