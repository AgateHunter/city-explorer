import React, { useState } from 'react';

const ClickButton = () => {
  // Define a state variable to track the button click
  const [clicked, setClicked] = useState(false);

  // Function to handle button click
  const handleClick = () => {
    // Update the state when the button is clicked
    setClicked(true);
  };

  return (
    <div>
      <h2>React Button Example</h2>
      <button onClick={handleClick}>Explore!</button>
      
      {clicked && <p>Button was clicked!</p>}
    </div>
  );
};

export default ClickButton;