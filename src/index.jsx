import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppQueryClientProvider, GitHubApiProvider, AppProvider } from './components/providers';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <AppQueryClientProvider>
        <GitHubApiProvider>
          <App />
        </GitHubApiProvider>
      </AppQueryClientProvider>
    </AppProvider>
  </React.StrictMode>,
);
