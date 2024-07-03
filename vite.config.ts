import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from 'tailwindcss'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProduction = mode === 'production';
  const remoteA_URL = env.REMOTE_COMPONENT_A;
  const remoteB_URL = env.REMOTE_COMPONENT_B;

  return {
    plugins: [
      react(),
      federation({
        name: "app",
        remotes: {
          remoteA : remoteA_URL,
          remoteB : remoteB_URL,
        },
        shared: ["react", "react-dom", "tailwindcss", "react-router-dom"]
      })
    ],
    css: {
      postcss: {
       plugins: [tailwindcss()],
      },
    },
    build: { 
      target: 'esnext', 
      minify: isProduction,
      cssCodeSplit: false 
    },
    server: {
      // Configura il tuo server di produzione qui
      // per esempio, potresti voler abilitare HTTPS o configurare un proxy
    }
  }
})