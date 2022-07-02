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
            width: "23px",
          },
        },
        reverseSwitch: {
          "0%": {
            left: "4px",
          },
          "50%": {
            left: "4px",
            width: "26px",
          },
          "100%": {
            left: "31px",
            width: "23px",
          },
        },
      },
      animation: {
        reverseSwitch: "reverseSwitch 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
