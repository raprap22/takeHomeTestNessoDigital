import { Container } from '@/components/atoms/Container';
import PeopleImg from '../../../../public/image/jpgAndpng/people.jpg';
import Image from 'next/image';
import { Typography } from '@/components/atoms/Typography';
import { INTRO_WORDING } from '@/data/data';
import { SectionHeading } from '../Add-Ons/SectionHeading';
import { SectionList } from '../Add-Ons/SectionList';

export function IntroContent() {
  return (
    <Container className="flex flex-col items-start gap-12" px=''>
      <SectionHeading title="Nesso Digitale" />

      <div className="flex flex-col gap-8 w-full lg:flex-row lg:items-start lg:justify-between">
        <Image
          src={PeopleImg}
          alt="people"
          className="w-full max-w-xl rounded-lg object-cover"
          priority
        />

        <div className="flex flex-col gap-6 max-w-xl">
          {INTRO_WORDING.map((intro) => (
            <SectionList key={intro.title} title={intro.title} description={intro.description} />
          ))}
        </div>
      </div>
    </Container>
  );
}
