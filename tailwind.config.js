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
          light: "#EBF3FB",
          accent: "#2A75D3",
        },
        baltimore: {
          brick: "#B83A24",
          teal: "#0D7C85",
          crab: "#D9381E",
          oldbay: "#BD0F2A",
          gold: "#F2B824",
          black: "#1A1A1A",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'jhu': '0 4px 20px -2px rgba(0, 45, 114, 0.15)',
        'glow': '0 0 15px rgba(104, 172, 229, 0.4)',
      }
    },
  },
  plugins: [],
}
