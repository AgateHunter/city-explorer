import React, { useState } from 'react';

const MyForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    cityName: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        City Name:
        <input
          type="text"
          name="cityName"
          value={formData.citytName}
          onChange={handleChange}
        />
      </label>
      
      <br />
      <button type="submit">Explore!</button>
    </form>
  );
};

export default MyForm;