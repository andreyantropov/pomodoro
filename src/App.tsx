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
import { ThemeContextProvider } from './context/ThemeContext/ThemeContext';

function App() {
  return (
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <ThemeContextProvider>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<Navigate replace to="/pomodoro" />} />
              <Route path="/pomodoro" element={<Pomodoro />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </ThemeContextProvider>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;
