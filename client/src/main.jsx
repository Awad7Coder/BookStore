import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

const basename = import.meta.env.PROD ? '/' : '/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter  basename={basename}>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
