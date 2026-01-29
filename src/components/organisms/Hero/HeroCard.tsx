import Image from 'next/image';
import HeroImage from '../../../../public/image/jpgAndpng/HeroImage.jpg';
import { SectionList } from '../Add-Ons/SectionList';
import { HERO_WORDING } from '@/data/data';

export function HeroCard() {
  const hero = HERO_WORDING[0];

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full gap-10 lg:gap-0">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={`${hero.title}-${index}`} className="flex flex-col gap-5">
          <Image src={HeroImage} width={410} height={395} alt="" />

          <SectionList
            width={410}
            titleSize="xl"
            titleDescription="xl"
            title={hero.title}
            description={hero.description}
          />
        </div>
      ))}
    </div>
  );
}
