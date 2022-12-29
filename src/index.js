import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';

import { WeatherProvider } from './contexts/Weather';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
