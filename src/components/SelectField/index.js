import React from 'react';

export default function SelectField(props) {
  const { cities, selectedCity, changeSelectedCity } = props

  return (
    <div>
      <select
        onChange={event => changeSelectedCity(event.target.value)}
        value={selectedCity}
      >
        <option value=""></option>
        {cities.map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
