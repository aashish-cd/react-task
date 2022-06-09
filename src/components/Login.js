import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async () => {
    try {
      const res = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignSelf: 'center',
          margin: '2rem 2rem',
          marginTop: '3rem',
        }}
      >
        <h1>Welcome Back</h1>
        <p>welcome back to the website</p>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          autoComplete='off'
        >
          <Form.Item
            name='email'
            rules={[
              { required: true, message: 'Please enter your email address' },
            ]}
          >
            <Input
              placeholder='Enter Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item name='password'>
            <Input.Password
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type='text'
              htmlType='submit'
              size='large'
              style={{
                color: 'white',
                backgroundColor: '#023047',
                margin: '0 10px',
                width: '90%',
              }}
            >
              Login
            </Button>
          </Form.Item>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form>
      </div>

      <img
        className='image'
        src='image.jpg'
        width={'70%'}
        alt='night view of dharan nepal'
      />
    </div>
  );
};

export default Login;
