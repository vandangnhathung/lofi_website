module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f3a952",
      },
      keyframes: {
        switch: {
          "0%": {
            left: "4px",
          },

          "100% ": {
            left: "104px",
            width: "82px,",
          },
        },
      },
      animation: {
        switch: "switch 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
