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
           {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  />
</svg>
}
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
      },
      animation: {
        switch: "switch 0.2s ease-in-out forwards",
        reverseSwitch: "reverseSwitch 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
