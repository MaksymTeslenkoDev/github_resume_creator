import React from 'react';
import { ErrorNotification, Loader } from './components/ui';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ErrorNotification />
      <Loader />
    </div>
  );
}

export default App;
