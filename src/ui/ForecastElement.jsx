import { FaCloud } from 'react-icons/fa';

function ForecastElement() {
  return (
    <div className="flex flex-col items-center mx-5 mt-6 gap-2 ">
      <p className="font-semibold text-stone-400">6:00 AM</p>
      <div className="text-7xl">
        <FaCloud />
      </div>
      <p className="font-semibold">25&deg;</p>
    </div>
  );
}
export default ForecastElement;
