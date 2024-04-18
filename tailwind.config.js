/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      // padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    // screens: {
    //   '3xl': '1800px',
    //   '2xl': '1600px',
    //   xl: '1367px',
    //   md: '768px',
    //   lg: '1024px',
    //   x3xl: {max: '1799px'},
    //   x2xl: {max: '1599px'},
    //   xxl: {max: '1366px'},
    //   xlg: {max: '1023px'},
    //   xmd: {max: '767px'},
    //   tablet: {min: '768px', max: '1023px'},
    // },
    extend: {
      colors: {
        'yellow-500': '#DAB571',
        'grey-500': '#484F57',
        'grey-700': '#33383E',
        'grey-900': '#1E2125',
        'grey-50': '#EDEDED',
        'grey-200': '#ABAEB2',
        'grey-600': '#42484F',
        white: '#fff',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        SVNLagu: ['var(--font-svn-lagusans)', 'sans-serif'],
        Iciel: ['var(--font-iciel-steradian)', 'sans-serif'],
      },
      backgroundImage: {
        overlayReason:
          'linear-gradient(lightgray -450.418px -356.646px / 214.465% 234.583% no-repeat, #D9D9D9)',
        hover_button: 'linear-gradient(180deg, #D1B37B 0%, #E4B867 100%)',
      },
      background: {
        blur_Reason: 'rgba(0, 0, 0, 0.30)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
