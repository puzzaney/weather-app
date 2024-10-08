import { useState } from 'react';
import { FaRegSun } from 'react-icons/fa';
import ForecastElement from './ForecastElement';
import { useGetLocation } from '../features/geocoding/useGetLocation';
import Searchbar from './Searchbar';

function WeatherMain() {
  // const { data, isLoading, error } = useGetLocation(city);

  // console.log(data);

  return (
    <div>
      <Searchbar />
      {/* <CommandDialog open={true}>
        <CommandInput placeholder="Search Cities" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </CommandDialog> */}
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
      </div>
      <div className="bg-secondary mt-8 px-4  pt-1.5 h-52 rounded-lg flex flex-col justify-start">
        <h5 className="font-semibold">Today's Forecast</h5>
        <div className="flex justify-between">
          <ForecastElement />
          <ForecastElement />
          <ForecastElement />
          <ForecastElement />
          <ForecastElement />
          <ForecastElement />
        </div>
      </div>
    </div>
  );
}
export default WeatherMain;
