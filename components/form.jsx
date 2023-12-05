import React, { useState } from 'react';

const LocationForm = () => {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make API request to LocationIQ
    const apiKey = 'pk.eabd0dfcdc96b62b44b0370cfb4625de';
    const apiUrl = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${city}&format=json`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Assuming the first result has the latitude and longitude
      const { lat, lon } = data[0];
      setLatitude(lat);
      setLongitude(lon);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter City:
          <input type="text" value={city} onChange={handleCityChange} />
        </label>
        <button onClick={getData}type="submit">Explore!</button>
      </form>

      {latitude && longitude && (
        <div>
          <h2>Location Information:</h2>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </div>
  );
};

export default LocationForm;


// import React, { useState } from 'react';

// const MyForm = () => {
//   // State to store form data
//   const [formData, setFormData] = useState({
//     cityName: ''
//   });

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic to handle form submission here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         City Name:
//         <input
//           type="text"
//           name="cityName"
//           value={formData.citytName}
//           onChange={handleChange}
//         />
//       </label>
      
//       <br />
//       <button type="submit">Explore!</button>
//     </form>
//   );
// };

// export default MyForm;