import { useState } from 'react';
import { FaRegSun } from 'react-icons/fa';

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
      <div className="grid grid-cols-2 mt-11 px-6 items-center">
        <div className="flex flex-col">
          <div className="mb-16">
            <h2 className="font-bold text-4xl text-gray-400">Birtamode</h2>
            <p className="mt-1 tracking-wider text-gray-400">
              Chance of rain: 0%
            </p>
          </div>
          <h1 className="font-bold text-6xl">31 &deg;</h1>
        </div>
        <div className=" text-9xl justify-self-end ">
          <FaRegSun />
        </div>
        <div className="bg-secondary mt-9 px-4 pt-1.5 h-28 rounded-lg">
          <h5 className="font-semibold">Today's Forecast</h5>
        </div>
      </div>
    </div>
  );
}
export default WeatherMain;
