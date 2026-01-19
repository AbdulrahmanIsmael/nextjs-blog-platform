import { I_mainStoreState } from "@/types/mainStore-types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create<I_mainStoreState>()(
  process.env.NODE_ENV === "development"
    ? devtools((set, get) => ({
        theme: "light",
        toggleTheme: () => {
          set({
            theme: get().theme === "light" ? "dark" : "light",
          });
          if (get().theme === "dark") {
            document.body.classList.add("dark");
          } else {
            document.body.classList.remove("dark");
          }
        },
      }))
    : (set, get) => ({
        theme: "light",
        toggleTheme: () => {
          set({
            theme: get().theme === "light" ? "dark" : "light",
          });
          if (get().theme === "dark") {
            document.body.classList.add("dark");
          } else {
            document.body.classList.remove("dark");
          }
        },
      })
);

export default useStore;
