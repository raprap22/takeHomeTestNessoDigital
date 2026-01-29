import { Container } from '@/components/atoms/Container';
import { FooterInfo } from './FooterInfo';
import { FooterMenu } from './FooterMenu';
import { FooterContact } from './FooterContact';

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="w-full pt-12 pb-20 sm:px-6 lg:px-18">
        <Container className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between" px="">
          <FooterInfo />
          <FooterMenu />
          <FooterContact />
        </Container>
      </div>
    </footer>
  );
}

