import React from 'react';
import './main.global.css';
import { Header } from './Header';
import { Pomodoro } from './Pomodoro';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PageNotFound } from './PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to="/tasks" />} />
          <Route path="/tasks" element={<Pomodoro />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
