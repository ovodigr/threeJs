import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoadingMain from './components/LoadingMain/LoadingMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingMain />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

