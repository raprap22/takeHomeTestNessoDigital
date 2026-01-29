import clsx from 'clsx';
import Image from 'next/image';

const brands = [
  '/image/svg/asset1.4.svg',
  '/image/svg/asset1.1.svg',
  '/image/svg/asset1.2.svg',
  '/image/svg/asset1.3.svg',
  '/image/svg/asset1.5.svg',
  '/image/svg/asset1.6.svg',
];

export function BrandList() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-2.25">
      {brands.map((src, idx) => (
        <div
          key={idx}
          className={clsx(
            'bg-[#D9D9D9] flex items-center justify-start rounded-full  px-3.25 hover:bg-[#2E2E2E] text-[#616161]',
            idx === 2 ? 'py-2' : 'py-3',
          )}
        >
          <Image
            src={src}
            alt={`Brand ${idx + 1}`}
            height={0}
            width={0}
            className={clsx(idx === 2 ? 'h-5' : 'h-3', 'object-contain w-auto')}
          />
        </div>
      ))}
    </div>
  );
}
