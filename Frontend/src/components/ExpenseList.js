import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/expenses')
      .then(response => setExpenses(response.data))
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.description} - {expense.amount} - {expense.expense_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
