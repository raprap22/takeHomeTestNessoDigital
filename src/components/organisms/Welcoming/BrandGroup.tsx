import { BrandList } from "../../molecules/BrandList";


export function BrandGroup() {
  return (
    <div className="mt-16 w-[50%] flex flex-col gap-5.75 text-center lg:text-start">
      <p className="text-[20px] font-medium text-gray-900">Brands that work with us</p>
      <BrandList />
    </div>
  );
}
