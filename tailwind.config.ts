import type { Config } from "tailwindcss";
import daisyui from "daisyui"

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
      colors: {
        'text': '#f1f2f3',

        'background': '#0c1d2c',

        'primary': '#8cb9de',

        'secondary': '#3c2380', 

        'accent': '#7d3cc8',

        'light-text': '#0c0d0e',

        'light-background': '#d3e4f3',

        'light-primary': '#214e73',

        'light-secondary': '#987fdc',
        
        'light-accent': '#7837c3',

      }

    },
  },
  plugins: [daisyui],
};
export default config;
