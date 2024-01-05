import React from 'react';
import './main.global.css';
import { Header } from './Header';
import { Pomodoro } from './Pomodoro';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PageNotFound } from './PageNotFound';
import { StoreContext } from "storeon/react";
import { store } from './store/store';
import { Statistics } from './Statistics';
import { Settings } from './Settings';

function App() {
  return (
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Navigate replace to="/tasks" />} />
            <Route path="/tasks" element={<Pomodoro />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;
