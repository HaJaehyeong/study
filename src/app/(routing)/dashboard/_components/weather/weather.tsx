import { Weathers } from '@/app/api/weather/route';

const fetchWeather = async () => {
  const res = await fetch('http://localhost:3000/api/weather');
  const data = await res.json();
  return data.weathers;
};

const WeatherList: React.FC<{ weathers: Weathers }> = ({ weathers }) => {
  return (
    <ul>
      {weathers.map((weather) => (
        <li key={weather.city}>
          {weather.city} - {weather.temperature}({weather.description})
        </li>
      ))}
    </ul>
  );
};

const Weather: React.FC = async () => {
  const weathers = await fetchWeather();

  return <WeatherList weathers={weathers} />;
};

export default Weather;
