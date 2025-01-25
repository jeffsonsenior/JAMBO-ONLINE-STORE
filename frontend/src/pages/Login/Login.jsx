/**import React from 'react'
import './Login.css'
import { useState } from 'react'


const Login = () => {

  const[currentState, setCurrentState] = useState('Login')
  return (
    <div>
      <form className='auth-form'>
        <div className="form-header">
          <p className="form-title">{currentState} </p>
        </div>
        {
          currentState === 'Login' ? null : (
            <input type='text' className='form-input' placeholder='Username' required />
          )
        }
        <input type='text' className='form-input' placeholder='Name' required />
        <input type='email' className='form-input' placeholder='Email' required />
        <input type='password' className='form-input' placeholder='Password' required />
        <div className="form-footer">
          <p className='forgot-password'>Forgot password</p>
          {
            currentState === 'Login' ? (
              <p className='toggle-auth-state' onClick={()=> setCurrentState('Sign Up')}>Create account</p>
            ) : (
              <p className='toggle-auth-state' onClick={()=> setCurrentState('Login')}>Login Here</p>
            )
          }
        </div>
        <button className='form-bottom'>
          {currentState ==='Login' ? 'Sign-In' : 'Sign-Up'}
        </button>
      </form>      
    </div>
  )
}

export default Login
**/
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add authentication logic here
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <p className="form-title">{currentState}</p>
        </div>
        {currentState === 'Sign Up' && (
          <input
            type="text"
            name="username"
            className="form-input"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        )}
        <input
          type="text"
          name="name"
          className="form-input"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          className="form-input"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <div className="form-footer">
          <p className="forgot-password">Forgot password</p>
          <p
            className="toggle-auth-state"
            onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
          >
            {currentState === 'Login' ? 'Create account' : 'Login Here'}
          </p>
        </div>
        <button type="submit" className="form-bottom">
          {currentState === 'Login' ? 'Sign-In' : 'Sign-Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
