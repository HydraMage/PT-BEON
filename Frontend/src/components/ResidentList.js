import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ResidentList() {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/residents')
      .then(response => setResidents(response.data))
      .catch(error => console.error('Error fetching residents:', error));
  }, []);

  return (
    <div>
      <h2>Residents</h2>
      <ul>
        {residents.map(resident => (
          <li key={resident.id}>
            {resident.full_name} - {resident.is_contract ? 'Contract' : 'Permanent'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResidentList;
