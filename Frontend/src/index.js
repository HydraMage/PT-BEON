import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import App from './App';
import ResidentList from './components/ResidentList';
import HouseList from './components/HouseList';
import PaymentList from './components/PaymentList';
import ExpenseList from './components/ExpenseList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/residents" element={<ResidentList />} />
        <Route path="/houses" element={<HouseList />} />
        <Route path="/payments" element={<PaymentList />} />
        <Route path="/expenses" element={<ExpenseList />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
