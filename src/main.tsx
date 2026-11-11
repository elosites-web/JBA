import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

// Inicialização opcional do Google Analytics 4 via variável de ambiente VITE_GA_ID
const gaId = import.meta.env.VITE_GA_ID;
if (gaId) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  gtag('js', new Date());
  gtag('config', gaId);
}

// Meta tag de verificação do Google Search Console via variável VITE_GSC_VERIFICATION
const gscToken = import.meta.env.VITE_GSC_VERIFICATION;
if (gscToken) {
  const meta = document.createElement('meta');
  meta.name = 'google-site-verification';
  meta.content = gscToken;
  document.head.appendChild(meta);
}

createRoot(document.getElementById('root')!).render(<App />);
