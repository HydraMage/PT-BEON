import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Community Management System</h1>
      <nav>
        <ul>
          <li><Link to="/residents">Residents</Link></li>
          <li><Link to="/houses">Houses</Link></li>
          <li><Link to="/payments">Payments</Link></li>
          <li><Link to="/expenses">Expenses</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
