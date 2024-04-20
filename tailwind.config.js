/** @type {import("tailwindcss").Config} */
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
    lineHeight: {
      1.2: '120%',
      1.3: '130%',
      1.4: '140%',
      1.5: '150%',
      1.7: '170%',
    },
    extend: {
      colors: {
        'yellow-500': '#DAB571',
        'grey-0': '#FFF',
        'grey-50': '#EDEDED',
        'grey-200': '#ABAEB2',
        'grey-300': '#84898E',
        'grey-400': '#6D7279',
        'grey-500': '#484F57',
        'grey-600': '#42484F',
        'grey-700': '#33383E',
        'grey-800': '#282B30',
        'grey-900': '#1E2125',
        'c-nht': '#FE4127',
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
        averta: ['var(--font-averta-std-cy)', 'sans-serif'],
      },
      backgroundImage: {
        overlayReason:
          'linear-gradient(lightgray -450.418px -356.646px / 214.465% 234.583% no-repeat, #D9D9D9)',
        hover_button: 'linear-gradient(180deg, #D1B37B 0%, #E4B867 100%)',
        hover_button_red: 'linear-gradient(180deg, #FE4127 90%, rgb(255 86 62) 100%)',
      },
      background: {
        blur_Reason: 'rgba(0, 0, 0, 0.30)',
      },
      letterSpacing: {
        0.1: '0.1rem',
        0.5: '0.5rem',
      },
      fontSize: {
        0.625: '0.625rem',
        1: '1rem',
        1.125: '1.125rem',
        1.25: '1.25rem',
        1.375: '1.375rem',
        2: '2rem',
        2.25: '2.25rem',
        3: '3rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
