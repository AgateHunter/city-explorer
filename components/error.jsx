import React from 'react';

const Error = ({ message }) => {
  return (
    <div style={{ color: 'red', border: '1px solid red', padding: '10px', margin: '10px 0' }}>
      <strong>Error:</strong> {message}
    </div>
  );
};

export default Error;