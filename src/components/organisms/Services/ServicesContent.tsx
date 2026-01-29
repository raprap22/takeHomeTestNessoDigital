import { Container } from '@/components/atoms/Container';
import { ServicesType } from './ServicesType';
import { SectionHeading } from '../Add-Ons/SectionHeading';

export function ServicesContent() {
  return (
    <Container className="flex flex-col items-start gap-20" px="">
      <SectionHeading
        title="I nostri servizi"
        description="Questi servizi sono progettati per aiutare i clienti a costruire e far crescere il proprio brand attraverso strategie creative e soluzioni digitali innovative."
      />

      <ServicesType />
    </Container>
  );
}
