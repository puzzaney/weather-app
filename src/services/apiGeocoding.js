const apiKey = process.env.WEATHER_API_KEY;

export async function apiGeocoding(city) {
  const res = await fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${city}&limit=1&apiKey=${apiKey}`
  );
  const data = await res.json();
  return data;
}
