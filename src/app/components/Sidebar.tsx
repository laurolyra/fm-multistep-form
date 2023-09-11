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
        <h2 className={`${step === 'initial' ? 'text-white' : 'text-black'}`}>
          Step 1 Your info
        </h2>
        <h2 className={`${step === 'plan' ? 'text-white' : 'text-black'}`}>
          Step 2 Select plan
        </h2>
        <h2 className={`${step === 'add-ons' ? 'text-white' : 'text-black'}`}>
          Step 3 Add-ons
        </h2>
        <h2 className={`${step === 'summary' ? 'text-white' : 'text-black'}`}>
          Step 4 Summary
        </h2>
      </div>
    </aside>
  );
}
