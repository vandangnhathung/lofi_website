module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f3a952",
        blackBackground: "#00000080",
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
          "0%": { transform: "scale(0)" },
          "100%": {
            transform: "scale(100%)",
          },
        },
        shake: {
          "0%": { transform: "rotate(-45deg)" },
          "20%": { transform: "rotate(45deg)" },
          "40%": { transform: "rotate(-35deg)" },
          "60%": { transform: "rotate(35deg)" },
          "80%": { transform: "rotate(-30deg)" },
          "100%": { transform: "rotate(0)" },
        },
      },
      animation: {
        switch: "switch 1s ease-in-out forwards",
        reverseSwitch: "reverseSwitch 1s ease-in-out forwards",
        scale: "scale 0.2s ease-in-out forwards",
        shake: "shake 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
