module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f3a952",
      },
      keyframes: {
        switch: {
          "0%": { width: "112px" },
          "50%": {},
          "100%": {},
        },
      },
    },
  },
  plugins: [],
};
