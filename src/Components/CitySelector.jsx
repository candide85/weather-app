// src/components/CitySelector.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CitySelector = ({ onSelectCity }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    if (countryCode) {
      // Example: Fetch cities based on country (You might need a real API or dataset for this)
      const fetchCities = async () => {
        try {
          // Replace with actual city fetching logic
          const response = await axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`);
          setCities(response.data);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      };

      fetchCities();
    }
  }, [countryCode]);

  const handleChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    onSelectCity(city);
  };

  return (
    <div>

        {cities.map((city) => (
          <div>
            {city.name}
          </div>
        ))}
    </div>
  );
};

export default CitySelector;
