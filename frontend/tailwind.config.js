export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./pages/**/*.{js,jsx}", "./charts/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#070b12",
        panel: "#0d1420",
        panelSoft: "#121c2b",
        line: "#263244",
        profit: "#24d18f",
        loss: "#ff5d73",
        amber: "#f5b84b",
        cyan: "#49c8ff"
      }
    }
  },
  plugins: []
};
