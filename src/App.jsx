import React from 'react';
import { ErrorNotification, Loader } from './components/ui';
import Routes from "./components/routes";
import './App.scss';

function App() {
  console.log("Test 1");
  return (
    <div className="App">
      <ErrorNotification />
      <Loader />
      <Routes />
    </div>
  );
}

export default App;
