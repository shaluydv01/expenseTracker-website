import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Enable early opt-in for React Router v7 transition feature
    'process.env.REACT_ROUTER_V7_STARTTRANSITION': true,
  },
});
