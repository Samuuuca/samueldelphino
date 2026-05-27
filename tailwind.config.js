/** @type {import('tailwindcss').Config} */
export default {
  // Diz ao Tailwind onde procurar pelas tuas classes CSS
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // Ativa o Dark Mode com base em classes (útil para toggles)
  darkMode: 'class', 
  
  theme: {
    extend: {
      // 1. Configuração de Animações Customizadas
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 8s ease-in-out infinite',
      },
      
      // 2. Definição dos Keyframes (o comportamento das animações)
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
      },
      
      // 3. Estender a paleta de cores (Opcional, mas recomendado para temas)
      colors: {
        // Exemplo de como adicionar cores da marca, caso não queiras usar as padrão do Tailwind
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          // ... podes adicionar mais tons
          500: '#6366f1', // Indigo 500
          900: '#312e81',
        }
      },
      
      // 4. Estender fontes (Opcional)
      fontFamily: {
        sans: [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      }
    },
  },
  plugins: [],
}