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
        'laranja': '#FF5C35',
        'azul': '#123659',
        'azulClaro': '#afdff9'
      },
    },
  },
  plugins: [],
};
export default config;
