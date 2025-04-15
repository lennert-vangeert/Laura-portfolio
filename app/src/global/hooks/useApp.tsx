import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

type AppState = {
  appTitle: string;
  author: string;
  theme: string;
  setTheme: (theme: string) => void;

  //SEO
  keyWords: string;
  image: string;
};

export default create<AppState>()(
  subscribeWithSelector((set) => ({
    appTitle: "Portfolio",
    author: "Laura Volkaert",
    theme: "light",
    setTheme: (theme: string) =>
      set({
        theme,
      }),

    //SEO
    keyWords: "portfolio, laura, volkaert, design, branding",
    image: "default-image-url.jpg",
  }))
);
