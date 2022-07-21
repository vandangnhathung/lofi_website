module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      smp: { max: "670px" },
    },
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
          "45%": { transform: "rotate(35deg)" },
          "50%": { transform: "rotate(-30deg)" },
          "60%": { transform: "rotate(30deg)" },
          "80%": { transform: "rotate(25deg)" },
          "100%": { transform: "rotate(0)" },
        },
        circulate: {
          "0%": { boxShadow: "2px 2px 25px 1px rgba(255, 255, 255, 0.8)" },
          "50%": { boxShadow: "2px 2px 14px 1px rgba(255, 255, 255, 0.4)" },
          "80%": { boxShadow: "2px 2px 25px 2px rgba(255, 255, 255, .2)" },
          "100%": { boxShadow: "2px 2px 30px 6px rgba(255, 255, 255, 0.6)" },
        },
      },
      animation: {
        switch: "switch 1s ease-in-out forwards",
        reverseSwitch: "reverseSwitch 1s ease-in-out forwards",
        scale: "scale 0.2s ease-in-out forwards",
        shake: "shake 1s ease-in-out forwards",
        circulate: "circulate 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
