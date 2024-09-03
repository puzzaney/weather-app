import { useState } from 'react';

function WeatherMain() {
  const [city, setCity] = useState('');

  return (
    <div>
      <input
        className="rounded-lg w-full bg-secondary h-8 px-5 active:ring-0"
        placeholder="Search Cities"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
    </div>
  );
}
export default WeatherMain;
