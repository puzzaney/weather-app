import { useState } from 'react';

function Searchbar() {
  const [city, setCity] = useState('');

  return (
    <div className="divide-y divide-primary px-5  overflow-hidden shadow-white shadow-sm bg-secondary">
      <input
        type="text"
        className="
        rounded-lg w-full bg-secondary h-8 py-5 text-lg text-gray-400 focus:outline-none focus:scale-[1.01] transition-all"
        placeholder="Search Cities"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <ul className="">
        <li className="mt-1  hover:bg-slate-400 hover:text-white">Birtamode</li>
        <li className="mt-1  hover:bg-slate-400 hover:text-white">Itahari</li>
        <li className="mt-1 hover:bg-slate-400 hover:text-white">Kathmandu</li>
      </ul>
    </div>
  );
}
export default Searchbar;
