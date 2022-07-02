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
            trasnform: "translateX(31px)",
          },
          "50%": {
            trasnform: "translateX(31px)",
            width: "26px",
          },
          "100% ": {
            left: "35px",
            width: "23px",
          },
        },
        reverse: {
          "0%": {
            left: "31px",
            width: "23px",
          },
          "50%": {
            left: "15px",
            width: "26px",
          },
          "100% ": {
            left: "4px",
            width: "23px",
          },
        },
      },
      animation: {
        switch: "switch 0.2s ease-in-out forwards",
        reverse: "reverse 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
