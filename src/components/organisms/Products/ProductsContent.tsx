import { Container } from '@/components/atoms/Container';
import { SectionHeading } from '../Add-Ons/SectionHeading';
import Image from 'next/image';
import Product from '../../../../public/image/jpgAndpng/product.png';
import { ProductDescription } from './ProductDescription';

export function ProductsContent() {
  return (
    <Container className="flex flex-col items-start gap-12 lg:gap-20" px="">
      <SectionHeading
        title="Progetti digitali di cui siamo orgogliosi"
        description="Piattaforma e-commerce scalabile, progettata per offrire un’esperienza utente fluida e pagamenti sicuri."
      />

      <div className="flex flex-col-reverse items-center w-full lg:flex-row lg:items-center lg:justify-between">
        <ProductDescription />

        <Image
          src={Product}
          alt="Product preview"
          className="w-60 sm:w-[320px] lg:w-96.5"
          priority
        />
      </div>
    </Container>
  );
}
