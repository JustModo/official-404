import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        club404: {
          primary: "#f3f4f6",

          secondary: "#0d1117",

          accent: "#f59e0b",

          neutral: "#000000",

          "base-100": "#1c1917",

          info: "#22d3ee",

          success: "#00ff00",

          warning: "#facc15",

          error: "#ff0000",
        },
      },
    ],
  },
};
export default config;
