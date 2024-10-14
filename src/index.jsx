import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import App from './App';
import { AppQueryClientProvider, GitHubApiProvider, AppProvider } from './components/providers';
import { DefaultTheme } from './theme';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <AppProvider>
        <AppQueryClientProvider>
          <GitHubApiProvider>
            <App />
          </GitHubApiProvider>
        </AppQueryClientProvider>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);
