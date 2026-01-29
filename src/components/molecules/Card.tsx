import Image from 'next/image';
import Icon from '../../../public/image/svg/icon1.svg';
import { Typography } from '../atoms/Typography';

type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div className="group relative w-full lg:w-[50%] h-100 lg:h-63 rounded-4xl bg-[#F1F1F1] pt-9 transition-all duration-300 hover:border hover:border-[#0B5ED7] text-center lg:text-start">
      <div className="flex flex-row justify-center lg:justify-between items-center px-5 lg:px-10">
        <Typography as="h4" size="2xl" className="group-hover:font-bold duration-300">
          {title}
        </Typography>
        <div className="hidden lg:flex transition-opacity opacity-0 duration-300 group-hover:opacity-100">
          <Image src={Icon} width={29} height={29} alt="" />
        </div>
      </div>
      <div className="bg-[#FFFFFF] mx-4 px-5.75 py-6.25 mt-5 rounded-3xl h-fit lg:h-35">
        <Typography as="span" size="xl">
          {description}
        </Typography>
      </div>
    </div>
  );
}
