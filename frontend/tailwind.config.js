export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
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
 
         // Hintergrundfarben
         'notizen-hintergrund': 'rgba(152, 178, 194, 0.25)', // 25% Opacity
         'tag-card': '#E7EBED',
         'navbar-hintergrund': '#04364D',
         'tag-dashboard-deactive': '#2B5D6F',
         'tag-dashboard-active': '#E4E8EC',
 
         // Selbsteinschätzung-Farben
         'selbsteinschaetzung': {
           fremd: '#C85200',
           ansatzhaft: '#E48646',
           vertraut: '#6B8EA4',
           bekannt: '#366785'  
         },

        gray: {
          text: '#6C6C6C'
        }
      },
      // Benutzerdefinierte Breakpoints
      screens: {
        mobile: { max: '639px' },
        tablet: '640px',
        laptop: '1024px'
      },
      // Benutzerdefinierte Font Sizes inkl. Line-Height
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
