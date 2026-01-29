import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { CTAButton } from '@/components/molecules/CTAButton';
import { Background } from '@/components/atoms/Background';
import { Divider } from '@/components/atoms/Divider';

export function BannerContent() {
  return (
    <Container className="flex flex-col items-start gap-12" px="">
      <div className="w-full rounded-3xl border border-[#0B5ED7] p-4 sm:p-6">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#F2F2F2] px-6 py-16 sm:py-20 text-center">
          <Background
            usingDivider={false}
            className="absolute inset-0 top-45! left-99! scale-[2.70] pointer-events-none hidden lg:block"
          />

          <div className="relative z-10 flex max-w-3xl flex-col items-center gap-4">
            <Typography as="span" size="base" className="font-normal">
              Attualmente disponibili per nuovi progetti
            </Typography>

            <Typography
              as="h2"
              className="text-[30px] font-normal text-[#0B5ED7]! sm:text-3xl lg:text-[42px]"
            >
              Interessato a collaborare con noi?
            </Typography>

            <Typography as="p" size="base" className="text-[#3C3C4399] opacity-80 max-w-prose">
              Aiutiamo aziende e team a progettare e sviluppare soluzioni digitali efficaci.
              Raccontaci il tuo progetto e scopriamo insieme come possiamo trasformare le tue idee
              in risultati concreti.
            </Typography>

            <CTAButton />
          </div>
        </div>
      </div>

      <Divider width="w-full" bgColor="bg-[#D9D9D9]" height="h-px" />
    </Container>
  );
}
