// import { useState } from 'react'

// import axios from 'axios';

// import Header from "../components/Header.jsx";
// import CityForm from "../components/cityform.jsx";
// import Map from '../components/map.jsx';
// import error from '../components/error.jsx'

// // Read in from .env.local file and live, it comes from "Environment Variables"
// const API_KEY = import.meta.env.VITE_API_KEY;

// function App() {

//   const [city, setCity] = useState('');
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);
//   const [error, setError] = useState(null);
  
//   function changeCity(newCity) {

//     // get the location data
//     getLocation(newCity);

//     // print a map
//     console.log("Changing to", newCity);
//   }

//   // Use API (locationIQ) to get the lat/lon
//   async function getLocation(cityName){

//     // 1. Call the API asynchronously
//     let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
//     try {
//       let response = await axios.get(url);
//       // 2. Put the city into state
//       setCity(response.data[0].display_name)

//       // 3. Put the lat/lon into state
//       setLatitude(response.data[0].lat);
//       setLongitude(response.data[0].lon);

//     } catch(error) {
//       console.error(error.message);
//       setError(
//         `Error fetching location data. Status Code: ${
//           error.response?.status || 'Unknown'
//         }. ${error.message}`
//       );
//     }

//   }

//   return (
//     <>
//       <Header />
//       <CityForm city={city} handleChangeCity={changeCity} />
//       <Map latitude={latitude} longitude={longitude} />
//     </>
//   )
// }

// export default App

import { useState } from 'react';
import axios from 'axios';
import Header from "../components/Header.jsx";
import CityForm from "../components/cityform.jsx";
import Map from '../components/map.jsx';
import Error from '../components/error.jsx'; // Adjust the import statement for the Error component

// Read in from .env.local file and live, it comes from "Environment Variables"
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [locationButtonClicked, setLocationButtonClicked] = useState(false);

  async function getLocation(cityName) {
    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;

    try {
      let response = await axios.get(url);
      setCity(response.data[0].display_name);
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);
    } catch (error) {
      console.error(error.message);
      setError(
        `Error fetching location data. Status Code: ${
          error.response?.status || 'Unknown'
        }. ${error.message}`
      );
    }
  }

  const handleLocationButtonClick = () => {
    setLocationButtonClicked(true);
    getLocation(city); // Assuming you want to get the location for the current city
  };

  return (
    <>
      <Header />
      <CityForm city={city} handleChangeCity={setCity} />
      <button onClick={handleLocationButtonClick}>Explore!</button>

      {locationButtonClicked && (
        <>
          <Map latitude={latitude} longitude={longitude} />
          {error && <Error message={error} />}
        </>
      )}
    </>
  );
}

export default App;
