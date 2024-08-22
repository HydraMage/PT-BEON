import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaymentList() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/payments')
      .then(response => setPayments(response.data))
      .catch(error => console.error('Error fetching payments:', error));
  }, []);

  return (
    <div>
      <h2>Payments</h2>
      <ul>
        {payments.map(payment => (
          <li key={payment.id}>
            {payment.payment_date} - {payment.amount} - {payment.payment_type} - {payment.status ? 'Paid' : 'Unpaid'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentList;
