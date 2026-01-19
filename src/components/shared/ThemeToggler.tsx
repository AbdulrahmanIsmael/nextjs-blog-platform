import { MdDarkMode, MdLightMode } from "react-icons/md";

import useStore from "@/stores/store";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useStore((state) => state);
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className=" cursor-pointer relative flex items-center justify-center w-11 h-11 rounded-full bg-secondary/20 backdrop-blur-xl border border-primary/30 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:bg-secondary/30 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-secondary/40 "
    >
      <span
        className="
      transition-transform duration-300
      hover:rotate-12
    "
      >
        {theme === "light" ? (
          <MdDarkMode size={22} />
        ) : (
          <MdLightMode size={22} />
        )}
      </span>

      <span
        className="
      absolute inset-0 rounded-full
      bg-linear-to-br from-secondary/40 to-transparent
      opacity-20
      pointer-events-none
    "
      />
    </button>
  );
};

export default ThemeToggler;
