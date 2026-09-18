/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hopkins: {
          heritage: "#002D72",
          spirit: "#68ACE5",
          gold: "#F1C400",
          deep: "#001845",
          navy: "#001433",
          light: "#EBF3FB",
          accent: "#2A75D3",
          vibrant: "#00539C",
        },
        baltimore: {
          brick: "#B83A24",
          teal: "#0D7C85",
          crab: "#D9381E",
          oldbay: "#BD0F2A",
          gold: "#F2B824",
          black: "#1A1A1A",
          crimson: "#D92D20",
          amber: "#D97706",
          forest: "#059669",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      boxShadow: {
        'jhu': '0 4px 20px -2px rgba(0, 45, 114, 0.15)',
        'glow': '0 0 15px rgba(104, 172, 229, 0.4)',
        'card-high': '0 4px 20px -2px rgba(0, 45, 114, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.08)',
        'polaroid': '0 10px 35px -5px rgba(0, 20, 50, 0.2), 0 4px 10px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
