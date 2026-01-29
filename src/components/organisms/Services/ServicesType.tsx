import Card from '@/components/molecules/Card';
import { SERVICES_WORDING } from '@/data/data';

export function ServicesType() {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full gap-4">
      {SERVICES_WORDING?.map((intro) => (
        <Card title={intro.title} description={intro.description} key={intro.title}/>
      ))}
    </div>
  );
}
