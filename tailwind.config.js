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
        // Christina's signature color palette
        jhu: {
          deep: "#0b2447",
          blue: "#1b5394",
        },
        jay: {
          sky: "#38bdf8",
          cyan: "#0284c7",
          soft: "#e0f2fe",
          line: "#bae6fd",
          'line-strong': "#7dd3fc",
        },
        cloud: "#f0f9ff",
        bubble: "#e6f5ff",
        candy: {
          coral: "#fb7185",
          amber: "#f59e0b",
          mint: "#10b981",
          purple: "#a855f7",
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
        sans: ['Nunito', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fredoka', 'Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['Fredoka', 'Outfit', 'sans-serif'],
        bubbly: ['Fredoka', 'Quicksand', 'system-ui', 'sans-serif'],
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
