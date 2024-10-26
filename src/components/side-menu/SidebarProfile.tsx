import SocialLink from '../social/SocialLink';

export default function SidebarProfile() {
  return (
    <div className="text-base">
      <div className="m-auto flex h-20 w-20 justify-center overflow-hidden rounded-full bg-indigo-600">
        <img src="./profile.png" alt="profile" />
      </div>
      <h4 className="semi mt-2 text-center text-2xl font-semibold text-slate-950 dark:text-white">
        Dima Kuchukov
      </h4>
      <div className="gap-2 text-center text-sm text-slate-950 dark:text-white">
        Frontend Developer
      </div>
      <SocialLink />
      <hr className="my-4 h-[1px] w-full border-t-0 bg-neutral-200 md:my-8"></hr>
    </div>
  );
}
