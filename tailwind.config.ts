import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,md,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,md,mdx}",
        "./src/_provider/**/*.{js,ts,jsx,tsx,md,mdx}",
    ],
    theme: {
        extend: {
            colors: {
              background: "var(--background)",
              foreground: "var(--foreground)",
              maincolor: "var(--maincolor)",
            },
        },
    },
    plugins: [],
};

export default config;