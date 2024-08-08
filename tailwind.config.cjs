
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   mode: 'jit',
//   theme: {
//     extend: {
//       colors: {
//         primary: '#6200EE', // Vibrant Purple
//         secondary: '#F5F5F5', // Very Light Gray
//         accent: '#03A9F4', // Sky Blue
//         background: '#FFFFFF', // White
//         textPrimary: '#212121', // Very Dark Gray
//         textSecondary: '#757575', // Medium Gray
//         highlight: '#03A9F4', // Sky Blue
//         highlightLight: '#81D4FA', // Lighter Sky Blue
//         error: '#B00020', // Dark Red
//         warning: '#FF9800', // Orange
//         success: '#4CAF50', // Green
//       },
//       boxShadow: {
//         card: '0px 10px 20px rgba(0, 0, 0, 0.1)',
//         cardLight: '0px 4px 8px rgba(0, 0, 0, 0.05)',
//       },
//       screens: {
//         xs: '450px',
//         sm: '640px',
//         md: '768px',
//         xmd: '900px',
//         lg: '1025px',
//         xl: '1280px',
//         '2xl': '1536px',
//         '3xl': '1800px',
//       },
//       backgroundImage: {
//         about: 'linear-gradient(165deg, rgba(245,245,245,1) 100%, rgba(255,255,255,1) 100%)',
//         experience: "linear-gradient(135deg, rgba(245,245,245,0.8) 60%, rgba(255,255,255,0.8) 100%),url('/src/assets/backgrounds/light-abstract.png')",
//         experienceLight: 'linear-gradient(137deg, rgba(245,245,245,0.5) 60%, rgba(255,255,255,0.9) 60%)',
//         hero: 'linear-gradient(135deg, rgba(245,245,245,0.8) 60%, rgba(255,255,255,0.95) 60%)',
//         'hero-mobile': 'linear-gradient(137deg, rgba(245,245,245,0.8) 60%, rgba(255,255,255,1) 60%)',
//         tech: "linear-gradient(165deg, rgba(245,245,245,0.8) 100%, rgba(255,255,255,0.8) 100%), url('/src/assets/backgrounds/nairobi.png')",
//       },
//       fontFamily: {
//         arenq: ['Arenq'],
//         beckman: ['Beckman'],
//         mova: ['Mova'],
//         overcameBold: ['Overcame Bold'],
//         overcameOutline: ['Overcame Outline'],
//         poppins: ['Poppins', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   mode: 'jit',
//   theme: {
//     extend: {
//       colors: {
//         primary: '#FFFFFF', // White
//         secondary: '#F5F5F5', // Very Light Gray
//         accent: '#6200EE', // Vibrant Purple
//         background: '#F5F5F5', // Very Light Gray
//         textPrimary: '#212121', // Very Dark Gray
//         textSecondary: '#757575', // Medium Gray
//         highlight: '#03A9F4', // Sky Blue
//         highlightLight: '#81D4FA', // Lighter Sky Blue
//         error: '#B00020', // Dark Red
//         warning: '#FF9800', // Orange
//         success: '#4CAF50', // Green
//       },
//       boxShadow: {
//         card: '0px 10px 20px rgba(0, 0, 0, 0.1)',
//         cardLight: '0px 4px 8px rgba(0, 0, 0, 0.05)',
//       },
//       screens: {
//         xs: '450px',
//         sm: '640px',
//         md: '768px',
//         xmd: '900px',
//         lg: '1025px',
//         xl: '1280px',
//         '2xl': '1536px',
//         '3xl': '1800px',
//       },
//       backgroundImage: {
//         about: 'linear-gradient(165deg, rgba(245,245,245,1) 100%, rgba(255,255,255,1) 100%)',
//         experience: "linear-gradient(135deg, rgba(245,245,245,0.8) 60%, rgba(255,255,255,0.8) 100%),url('/src/assets/backgrounds/light-abstract.png')",
//         experienceLight: 'linear-gradient(137deg, rgba(245,245,245,0.5) 60%, rgba(255,255,255,0.9) 60%)',
//         hero: 'linear-gradient(135deg, rgba(245,245,245,0.8) 60%, rgba(255,255,255,0.95) 60%)',
//         'hero-mobile': 'linear-gradient(137deg, rgba(245,245,245,0.8) 60%, rgba(255,255,255,1) 60%)',
//         tech: "linear-gradient(165deg, rgba(245,245,245,0.8) 100%, rgba(255,255,255,0.8) 100%), url('/src/assets/backgrounds/nairobi.png')",
//       },
//       fontFamily: {
//         arenq: ['Arenq'],
//         beckman: ['Beckman'],
//         mova: ['Mova'],
//         overcameBold: ['Overcame Bold'],
//         overcameOutline: ['Overcame Outline'],
//         poppins: ['Poppins', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#121212', // Very Dark Gray
        secondary: '#1F1F1F', // Darker Gray
        accent: '#BB86FC', // Soft Purple
        background: '#121212', // Very Dark Gray
        textPrimary: '#E0E0E0', // Light Gray
        textSecondary: '#A1A1A1', // Muted Gray
        highlight: '#03DAC6', // Teal
        highlightLight: '#018786', // Darker Teal
        error: '#CF6679', // Red
        warning: '#FBC02D', // Yellow
        success: '#03DAC6', // Teal
      },
      boxShadow: {
        card: '0px 35px 120px -15px rgba(0, 0, 0, 0.9)',
        cardLight: '0px 19px 38px rgba(0, 0, 0, 0.7), 0px 15px 12px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        xs: '450px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      backgroundImage: {
        about: 'linear-gradient(165deg, rgba(18, 18, 18, 0.8) 100%, rgba(31, 31, 31, 0.8) 100%)',
        experience: "linear-gradient(135deg, rgba(18, 18, 18, 0.5) 60%, rgba(10, 10, 10, 0.2) 100%),url('/src/assets/backgrounds/dark-abstract.png')",
        experienceLight: 'linear-gradient(137deg, rgba(18, 18, 18, 0.5) 60%, rgba(10, 10, 10, 0.9) 60%)',
        hero: 'linear-gradient(135deg, rgba(18, 18, 18, 0.8) 60%, rgba(10, 10, 10, 0.95) 60%)',
        'hero-mobile': 'linear-gradient(137deg, rgba(18, 18, 18, 0.8) 60%, rgba(10, 10, 10, 1) 60%)',
        tech: "linear-gradient(165deg, rgba(20, 20, 20, 0.8) 100%, rgba(109, 109, 116, 0.8) 100%), url('/src/assets/backgrounds/nairobi.png')",
      },
      fontFamily: {
        arenq: ['Arenq'],
        beckman: ['Beckman'],
        mova: ['Mova'],
        overcameBold: ['Overcame Bold'],
        overcameOutline: ['Overcame Outline'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
