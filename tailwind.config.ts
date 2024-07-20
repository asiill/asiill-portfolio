import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#c8cc92",
        cameoPink: "#e6ccbe",
        roseTaupe: "#776274",
        mauveTaupe: "#a07178",
        lightSeaGreen: "#92ccbf",
        slateGray: "5a5353",
      },
    },
  },
  plugins: [],
};
export default config;