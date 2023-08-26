import Image from 'next/image';
import bg from '../../../public/bg-sidebar-desktop.svg';
import { useAppSelector } from '@/redux/hooks';

export default function Sidebar() {
  const step = useAppSelector((state) => state.stepperReducer.value);
  return (
    <aside className="relative h-full">
      <Image
        src={bg}
        alt="background image for sidebar menu"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative h-full">
        <h2 className="text-center font-semibold text-4xl pb-8 pt-14">
          Sidebar
        </h2>
        <h2>{step}</h2>
      </div>
    </aside>
  );
}
