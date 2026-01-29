import { Container } from '@/components/atoms/Container';
import { SectionHeading } from '../Add-Ons/SectionHeading';
import { ProcessDescription } from './ProcessDescription';

export function ProcessContent() {
  return (
    <Container className="flex flex-col items-start gap-20" px="">
      <SectionHeading
        sizeDescription="base"
        title="La trasformazione digitale in azione"
        description="Dai processi manuali a quelli automatizzati: esempi concreti di come aiutiamo i nostri clienti a semplificare il lavoro quotidiano, ridurre gli errori e ottenere risultati misurabili."
      />
      <ProcessDescription />
    </Container>
  );
}
