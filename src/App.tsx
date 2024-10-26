import { useContext } from 'react';
import SideMenu from './components/side-menu/SideMenu';
import ThemeContext from './context/themeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`ml-[300px] w-full ${theme}`}>
      <div className="dark:bg-neutral-700">
        <div className="flex dark:bg-neutral-700">
          <SideMenu />
          <section className="mt-10 overflow-hidden pb-16 pt-32 lg:mt-0">
            <div className="container px-3">
              <div className="md:gap-15 flex w-full flex-wrap items-center justify-between gap-10">
                <div className="w-[478px]">
                  <p className="text-2xl uppercase text-[#292929]">Hi, I'm freelancer</p>
                </div>
                <div className="">
                  <div className="bg-white">
                    <img width="325" height="407" src="./user.jpg" alt="Dima Kuchukov" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
