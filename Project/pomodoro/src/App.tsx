import React from 'react';
import './main.global.css';
import { Header } from './Header';
import { Pomodoro } from './Pomodoro';

function App() {
  return (
    <>
      <Header />
      <main>
        <Pomodoro />
      </main>
    </>
  );
}

export default App;
