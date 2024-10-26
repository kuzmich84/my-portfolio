import SideMenuLeft from './SideMenuLeft';
import SideMenuRight from './SideMenuRight';

export default function SideMenu() {
  return (
    <div className="fixed left-0 top-0 z-[999] h-screen w-[300px] dark:bg-neutral-700">
      <div className="flex">
        <SideMenuLeft />
        <SideMenuRight />
      </div>
    </div>
  );
}
