import WeatherMain from '../ui/WeatherMain';

function Weather() {
  return (
    <main className="grid grid-cols-[1fr_25rem] mt-4 mx-4 text-white">
      <WeatherMain />
      <div>RighSection</div>
    </main>
  );
}
export default Weather;
