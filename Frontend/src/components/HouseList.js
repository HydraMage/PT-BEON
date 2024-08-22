import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HouseList() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/houses')
      .then(response => setHouses(response.data))
      .catch(error => console.error('Error fetching houses:', error));
  }, []);

  return (
    <div>
      <h2>Houses</h2>
      <ul>
        {houses.map(house => (
          <li key={house.id}>
            {house.house_number} - {house.is_occupied ? 'Occupied' : 'Vacant'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HouseList;
