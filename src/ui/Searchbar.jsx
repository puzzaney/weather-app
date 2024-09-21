import { useState } from 'react';
import { useGetLocation } from '../features/geocoding/useGetLocation';
import AutocompleteItem from '../components/AutocompleteItem';

const apiKey = import.meta.env.VITE_GEO_API_KEY;

function Searchbar() {
  const [city, setCity] = useState('');

  const { data = {}, error, isLoading } = useGetLocation(city);

  const { geonames: cityData = [] } = data;

  return (
    <div className=" divide-y divide-primary  overflow-hidden shadow-secondary rounded-xl shadow bg-secondary">
      <input
        type="text"
        className="
        px-2 rounded-lg w-full bg-secondary h-8 py-5 text-lg text-gray-400 focus:outline-none"
        placeholder="Search Cities"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      {cityData.length > 0 && (
        <ul className="p-0 w-full m-0">
          {cityData.map((city) => (
            <AutocompleteItem city={city.name} key={city.lat} />
          ))}
        </ul>
      )}
    </div>
  );
}
export default Searchbar;
