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
          "50%": {
            left: "4px",
            width: "26px",
          },
          "100% ": {
            left: "31px",
            width: "23px,",
          },
        },
        reverse: {
          "0%": {
            left: "31px",
            width: "23px,",
          },
          "50%": {
            left: "4px",
            width: "26px",
          },
          "100% ": {
            left: "4px",
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
