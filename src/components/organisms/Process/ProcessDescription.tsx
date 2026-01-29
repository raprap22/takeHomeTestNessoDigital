import { Badge } from '@/components/molecules/Badge';
import { SectionList } from '../Add-Ons/SectionList';
import { Button } from '@/components/atoms/Button';
import { PROCESS_WORDING } from '@/data/data';
import { Fragment } from 'react/jsx-runtime';
import Image from 'next/image';
import PoepleImage from '../../../../public/image/jpgAndpng/peopleWithIcon.png';

export function ProcessDescription() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:w-full justify-between gap-5">
      <div className="flex flex-col gap-6">
        {PROCESS_WORDING.slice(0, 2).map((process) => (
          <SectionList
            key={process.title}
            width={332}
            title={process.title}
            description={process.description}
          />
        ))}
      </div>

      <Image src={PoepleImage} alt="Process illustration" width={479} height={214} />

      <div className="flex flex-col gap-6">
        {PROCESS_WORDING.slice(2).map((process) => (
          <SectionList
            key={process.title}
            width={332}
            title={process.title}
            description={process.description}
          />
        ))}
      </div>
    </div>
  );
}
