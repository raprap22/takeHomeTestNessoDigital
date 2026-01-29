import { Container } from '@/components/atoms/Container';
import { IntroContent } from '@/components/organisms/Intro/IntroContent';

export function IntroSection() {
  return (
    <section aria-labelledby="Intro"className="bg-[#F6F6F6] py-10.5 lg:px-18">
        <IntroContent />
    </section>
  );
}
