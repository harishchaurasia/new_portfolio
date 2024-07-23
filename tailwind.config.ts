import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        imperfect: ['ImPerfect23', 'sans-serif'],
        league: ['LeagueSpartan-Bold', 'sans-serif'],
        speedBeast: ['SpeedBeast', 'sans-serif'],
        playfair: ['PlayfairDisplay-Variable', 'serif'],
        ComicNeue:['ComicNeue-Regular', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
