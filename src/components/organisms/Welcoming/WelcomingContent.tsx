import { HeroHeading } from "@/components/molecules/HeroHeading";
import { CTAButton } from "@/components/molecules/CTAButton";
import { BrandGroup } from "@/components/organisms/Welcoming/BrandGroup";

export function WelcomingContent() {
  return (
    <div className="flex flex-col font-body items-center lg:items-start py-10 lg:py-0">
      <HeroHeading />
      <CTAButton />
      <BrandGroup />
    </div>
  );
}
