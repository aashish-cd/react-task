import React from 'react';
import { Button } from 'antd';

const Navbar = () => {
  return (
    <div className='navContainer'>
      <a
        href='/'
        style={{
          textDecoration: 'none',
          color: '#023047',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        ATools<span style={{ color: 'red' }}>.</span>
      </a>
      <div className='buttonContainer'>
        <Button
          type='text'
          size='large'
          style={{
            color: 'white',
            backgroundColor: '#023047',
            margin: '0 10px',
          }}
        >
          Start Free Trial
        </Button>
        <Button
          type='text'
          size='large'
          style={{
            color: 'white',
            backgroundColor: '#fb8500',
            margin: '0 10px',
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
