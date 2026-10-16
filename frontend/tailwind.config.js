/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Source Sans 3", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        navy: {
          void: '#03060D',
          deep: '#04081A',
          card: '#0A1128',
          light: '#111A35',
        },
        teal: {
          glow: '#195843',
        },
        champagne: {
          DEFAULT: 'hsl(var(--champagne))',
          glow: '#E9C46A',
        },
        warm: 'hsl(var(--warm))',
        mist: 'hsl(var(--mist))',
        sand: 'hsl(var(--sand))',
        band: 'hsl(var(--band))',
        ivory: 'hsl(var(--foreground))',
        forest: {
          DEFAULT: '#195843',
          cream: '#FAF9F6',
          accent: '#E9C46A',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-24px) rotate(2deg)' }
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' }
        },
        'aurora-drift': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(6%, -4%) scale(1.1)' },
          '66%': { transform: 'translate(-5%, 5%) scale(0.95)' },
          '100%': { transform: 'translate(0, 0) scale(1)' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 1.5rem))' }
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - 1.5rem))' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'float-medium': 'float-medium 6s ease-in-out infinite',
        'aurora-drift': 'aurora-drift 18s ease-in-out infinite',
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
