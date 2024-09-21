function AutocompleteItem({ city }) {
  return (
    <li className="w-full px-2 py-2 hover:bg-gray-400 hover:text-white">
      {city}
    </li>
  );
}
export default AutocompleteItem;
