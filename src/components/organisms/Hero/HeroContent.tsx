import { Container } from '@/components/atoms/Container';
import { SectionHeading } from '../Add-Ons/SectionHeading';
import { HeroCard } from './HeroCard';

export function HeroContent() {
  return (
    <Container className="flex flex-col items-start gap-10" px="">
      <SectionHeading
        isDoubleLine
        sizeDescription='base'
        title="La trasformazione digitale, passo dopo passo"
        description="Esempi pratici di automazione che semplificano le attività operative e migliorano le performance aziendali."
      />
      <HeroCard/>
    </Container>
  );
}
