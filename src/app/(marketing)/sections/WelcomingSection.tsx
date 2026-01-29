import { Container } from '@/components/atoms/Container';
import { Background } from '@/components/atoms/Background';
import { WelcomingContent } from '@/components/organisms/Welcoming/WelcomingContent';
import { WelcomingVisual } from '@/components/organisms/Welcoming/WelcomingVisual';

export default function WelcomingSection() {
  return (
    <section aria-labelledby="Welcoming" className="py-10.5 lg:px-18">
      <Container className="relative overflow-hidden md:py-24" px=''>
        <div className="hidden lg:flex">
          <Background />
        </div>

        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:justify-between">
          <WelcomingContent />
          <WelcomingVisual />
        </div>
      </Container>
    </section>
  );
}
