import React from 'react';
import { ErrorNotification, Loader } from './components/ui';
import Routes from "./components/routes";
import './App.scss';

function App() {
  return (
    <div className="App">
      <ErrorNotification />
      <Loader />
      <Routes />
    </div>
  );
}

export default App;
