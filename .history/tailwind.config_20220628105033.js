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
            width: "35px",
          },
          "100% ": {
            left: "35px",
            width: "23px",
          },
        },
        reverseSwitch: {
          "0%": {
            left: "35px",
          },
          "50%": {
            left: "15px",
            width: "35px",
          },
          "100%": {
            left: "4px",
            width: "23px",
          },
        },
        scale: {
          "0%": { width: "0" },
          "100%": {
            width: "100%",
          },
        },
      },
      animation: {
        switch: "switch 1s ease-in-out forwards",
        reverseSwitch: "reverseSwitch 1s ease-in-out forwards",
        scale: "scale 0.5 ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
