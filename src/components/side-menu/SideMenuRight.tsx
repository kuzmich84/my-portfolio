import SidebarProfile from './SidebarProfile';

export default function SideMenuRight() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <div className="flex h-full flex-col justify-between gap-6 bg-neutral-50 px-5 py-10 dark:bg-neutral-500">
        <SidebarProfile />
      </div>
    </div>
  );
}
