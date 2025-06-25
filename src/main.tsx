import 'core-js/stable/object/has-own';
import 'core-js/stable/set/difference';

import '@xyflow/react/dist/style.css';
import { setAutoFreeze } from 'immer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AuthSessionManager } from './auth/AuthSessionManager.tsx';
setAutoFreeze(false); // TODO Bug on change solver

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthSessionManager />
    <App />
  </React.StrictMode>,
);
