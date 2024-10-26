import { Theme } from './context/themeContext';
import { ThemeProvider } from './context/ThemeProvider';
import useLocalStorage from './hooks/useLocalStorage';

export default function Provider({ children }: { children: React.ReactNode }) {
  const [theme] = useLocalStorage('theme', Theme.Light);
  return <ThemeProvider themeName={theme}>{children}</ThemeProvider>;
}
