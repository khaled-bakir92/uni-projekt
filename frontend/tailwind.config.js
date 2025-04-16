export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      // Farben
      colors: {
        primary: '#32505A',
        secondary: '#98A8B4',
        border: '#E0E0E0',
        background: '#FFFFFF',
        'regular-font': '#1F2329',
        'font-light': '#B3B3B3',
        'font-white': '#FFFFFF',
         // UI-Farben
         'border-farbe': '#E0E0E0',
         primary: '#2B5D6F',
         'antwort-hintergrund': '#E4F8F0',
         'frage-hintergrund': '#C8D6DE',
         'card.border': '#2B5D6F',
 
         // Hintergrundfarben
         'notizen-hintergrund': 'rgba(152, 178, 194, 0.25)', // 25% Opacity
         'tag-card': '#E7EBED',
         'navbar-hintergrund': '#04364D',
         'tag-dashboard-deactive': '#2B5D6F',
         'tag-dashboard-active': '#E4E8EC',

        gray: {
          text: '#6C6C6C'
        }
      },
      dropShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      // Breakpoints
      screens: {
        mobile: { max: '639px' },
        tablet: '640px',
        laptop: '1024px'
      },

      fontSize: {
        // Mobile
        'mobile-extralight': ['12px', { lineHeight: '20px' }],
        'mobile-light': ['14px', { lineHeight: '20px' }],
        'mobile-regular': ['16px', { lineHeight: '24px' }],
        'mobile-semibold': ['18px', { lineHeight: '26px' }],
        'mobile-bold': ['20px', { lineHeight: '28px' }],
        // Tablet 
        'tablet-light': ['16px', { lineHeight: '22px' }],
        'tablet-regular': ['18px', { lineHeight: '24px' }],
        'tablet-semibold': ['20px', { lineHeight: '26px' }],
        'tablet-bold': ['22px', { lineHeight: '28px' }],
        // Laptop
        'laptop-light': ['18px', { lineHeight: '24px' }],
        'laptop-regular': ['20px', { lineHeight: '26px' }],
        'laptop-semibold': ['22px', { lineHeight: '28px' }],
        'laptop-bold': ['24px', { lineHeight: '30px' }],
      },
      // Font Weights
      fontWeight: {
        light: 300,
        regular: 400,
        'semi-bold': 600,
        bold: 700,
      }
    },
  },
  plugins: [],
}
