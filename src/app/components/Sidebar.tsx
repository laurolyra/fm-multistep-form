import Image from 'next/image';
import bg from '../../../public/bg-sidebar-desktop.svg';

export default function Sidebar() {
  return (
    <aside className="relative h-full">
      <Image
        src={bg}
        alt="background image for sidebar menu"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative">
        <h2 className="text-center font-semibold text-4xl pb-8 pt-14">
          Sidebar
        </h2>
      </div>
    </aside>
  );
}
