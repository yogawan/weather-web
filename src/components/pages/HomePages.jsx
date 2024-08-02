// import React, { useEffect, useState } from 'react';
// import { getDataWeather } from '../../service/api/dataFetch';

// const HomePages = () => {
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const data = await getDataWeather('surakarta', 'jv');
//         setWeather(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };
//     fetchWeather();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       {weather ? (
//         <div>
//           <h1>Cuaca di {weather.location.name}</h1>
//           <p>Suhu: {weather.current.temp_c}°C</p>
//           <p>Kondisi: {weather.current.condition.text}</p>
//         </div>
//       ) : (
//         <p>Tidak ada data cuaca yang tersedia.</p>
//       )}
//     </div>
//   );
// };

// export default HomePages;







// import React, { useEffect, useState } from 'react';
// import { getDataWeather } from '../../service/api/dataFetch';

// const HomePages = () => {
//   const [weatherData, setWeatherData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       const cities = ['klaten', 'surakarta', 'yogyakarta', 'surabaya'];
//       try {
//         const data = await Promise.all(cities.map(city => getDataWeather(city, 'jv')));
//         const weather = data.reduce((acc, curr) => {
//           acc[curr.location.name.toLowerCase()] = curr;
//           return acc;
//         }, {});
//         setWeatherData(weather);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };
//     fetchWeather();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
//       {Object.keys(weatherData).length > 0 ? (
//         Object.keys(weatherData).map(city => (
//           <div key={city} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '200px' }}>
//             <h2>{weatherData[city].location.name}</h2>
//             <p>Suhu: {weatherData[city].current.temp_c}°C</p>
//             <p>Kondisi: {weatherData[city].current.condition.text}</p>
//           </div>
//         ))
//       ) : (
//         <p>Tidak ada data cuaca yang tersedia.</p>
//       )}
//     </div>
//   );
// };

// export default HomePages;

import React, { useEffect, useState } from 'react';
import { getDataWeather } from '../../service/api/dataFetch';

const HomePages = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('surakarta');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getDataWeather(city, 'jv');
        setWeather(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
    setLoading(true);
  };

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <div>
        <br />
          <br />
        <br />
      </div>
      <div className="header">
        <h1 className='white'><em><u>Real-Time</u></em> Weather</h1>
        <p className='semi-white'>for <em><u>Solo The Spirit of Java</u></em><br />and <em><u>Surrounding Areas</u></em></p>
      </div>
      <hr />
      <div>
        <br />
        <br />
      </div>
      <div className='weather'>
        {weather ? (
          <div className='content'>
            <img src={weather.current.condition.icon} alt="Weather Icon" />
            <h3 className='white'>{weather.current.temp_c}°C</h3>
            <div className="kota">
              <img src="./city.svg" alt="img" />
              <h2 className='white'>{weather.location.name}</h2>
            </div>
            <div className="kota">
              <img src="./location_on.svg" alt="img" />
              <p className='white'>{weather.location.region}, {weather.location.country}</p>
            </div>
          </div>
        ) : (
          <p>Tidak ada data cuaca yang tersedia.</p>
        )}
      </div>
      <div className='city'>
        <button className='white' onClick={() => handleCityChange('surakarta')}>
          <img src="./location_off.svg" alt="Surakarta" />
          Surakarta
        </button>
        <button className='white' onClick={() => handleCityChange('klaten')}>
          <img src="./location_off.svg" alt="Klaten" />
          Klaten
        </button>
        <button className='white' onClick={() => handleCityChange('boyolali')}>
          <img src="./location_off.svg" alt="Boyolali" />
          Boyolali
        </button>
        <button className='white' onClick={() => handleCityChange('salatiga')}>
          <img src="./location_off.svg" alt="Salatiga" />
          Salatiga
        </button>
        <button className='white' onClick={() => handleCityChange('sragen%20central%20java')}>
          <img src="./location_off.svg" alt="Sragen" />
          Sragen
        </button>
        <button className='white' onClick={() => handleCityChange('semarang')}>
          <img src="./location_off.svg" alt="Semarang" />
          Semarang
        </button>
        <button className='white' onClick={() => handleCityChange('yogyakarta')}>
          <img src="./location_off.svg" alt="Yogyakarta" />
          Yogyakarta
        </button>
        <button className='white' onClick={() => handleCityChange('surabaya')}>
          <img src="./location_off.svg" alt="Surabaya" />
          Surabaya
        </button>
      </div>
      <div>
        <br />
      </div>
      <hr />
      <div>
        <br />
        <br />
      </div>
      <div className="hour">
        {weather?.forecast?.forecastday?.[0]?.hour.map((hour) => (
          <div key={hour.time} className='content'>
            <img src={hour.condition.icon} alt="Weather Icon" />
            <p className='white'>{hour.temp_c}°C</p>
            <p className='semi-white'>{hour.time}</p>
          </div>
        ))}
      </div>
      <nav>
        <ul>
          <li>
            <img src="./creator.svg" alt="img" />
            <a href="https://github.com/yogawan">Follow Developer</a>
          </li>
        </ul>
      </nav>
      <div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default HomePages;

