import DeveloperIcon from '../icons/developer';
import MoonIcon from '../icons/moon';
import SunIcon from '../icons/sun';
import useLocalStorage from '../../hooks/useLocalStorage';
import ThemeContext, { Theme } from '../../context/themeContext';
import { useContext } from 'react';

export default function SideMenuLeft() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [value, setValue] = useLocalStorage('theme', Theme.Light);

  const handleChangeTheme = () => {
    theme === Theme.Dark ? setTheme(Theme.Light) : setTheme(Theme.Dark);
    value === Theme.Dark ? setValue(Theme.Light) : setValue(Theme.Dark);
  };

  return (
    <div className="w-16">
      <div className="mt-6 flex w-16 flex-col items-center justify-center gap-8">
        <a
          className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 bg-zinc-50"
          href="/"
        >
          <DeveloperIcon color="#4f46e5" />
        </a>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] leading-[130%] dark:text-white">
            {theme === Theme.Dark ? 'Light Mode' : 'Dark Mode'}
          </span>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500"
            onClick={handleChangeTheme}
          >
            {theme === Theme.Dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}
