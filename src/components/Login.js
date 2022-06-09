import React from 'react';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '40%' }}>
        <form onSubmit={handleSubmit}></form>
      </div>
      <div>
        <img src='image.jpg' width={'40%'} alt='night view of dharan nepal' />
      </div>
    </div>
  );
};

export default Login;
