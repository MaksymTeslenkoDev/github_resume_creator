import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppQueryClientProvider, GitHubApiProvider } from './components/providers';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppQueryClientProvider>
      <GitHubApiProvider>
        <App />
      </GitHubApiProvider>
    </AppQueryClientProvider>
  </React.StrictMode>,
);