const apiKey = import.meta.env.VITE_GEO_API_KEY;

export async function apiGeocoding(city) {
  const res = await fetch(
    `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&countryBias=nepal&username=${apiKey}`
  );
  const data = await res.json();
  return data;
}
