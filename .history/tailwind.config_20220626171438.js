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
            transform: "translateX(6px)",
          },
          "50%": {
            transform: "translateX(14px)",
            width: "26px",
          },
          "100% ": {
            transform: "translateX(31px)",
            width: "23px",
          },
        },
      },
      keyframes: {
        reverse: {
          "0%": {
            transform: "-translateX(31px)",
            width: "23px",
          },
          "50%": {
            transform: "-translateX(14px)",
            width: "26px",
          },
          "100% ": {
            transform: "-translateX(6px)",
          },
        },
      }
      animation: {
        switch: "switch 0.2s ease-in-out forwards",
        reverse: "reverse 0.2s ease-in-out backwards",
      },
    },
  },
  plugins: [],
};
