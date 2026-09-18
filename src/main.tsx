import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './language/i18n';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

document.documentElement.classList.add('js');
if (root.childElementCount) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
