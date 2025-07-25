 /** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'image-bg': "url('/src/image/01.png')", 
        'image-bg1': "url('/src/image/54d5461867d4824bac8d0c210efaeb428f3a2727.jpg')",
        // 'image-bg2': "url('/src/Rectangle1.png')",
      },
    },
  },
  plugins: [],
};
