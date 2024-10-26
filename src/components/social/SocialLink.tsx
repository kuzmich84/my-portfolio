import { CiFacebook } from 'react-icons/ci';
import { PiTelegramLogoLight } from 'react-icons/pi';
import { CiLinkedin } from 'react-icons/ci';

export default function SocialLink() {
  return (
    <ul className="mt-4 flex justify-center gap-2">
      <li className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-200 hover:bg-indigo-500 dark:border-zinc-400">
        <a className="group-hover:text-white" href="https://facebook.com">
          <CiFacebook className="text-indigo-500 group-hover:text-white" />
        </a>
      </li>
      <li className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-200 hover:bg-indigo-500 dark:border-zinc-400">
        <a className="group-hover:text-white" href="https://telegram.com">
          <PiTelegramLogoLight className="text-indigo-500 group-hover:text-white" />
        </a>
      </li>
      <li className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-200 hover:bg-indigo-500 dark:border-zinc-400">
        <a className="group-hover:text-white" href="https://www.linkedin.com/">
          <CiLinkedin className="text-indigo-500 group-hover:text-white" />
        </a>
      </li>
    </ul>
  );
}
