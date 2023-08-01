import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate('');
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [error, setErrors] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== checkPassword) {
      setErrors('Passwords do not match');
      return;
    }
    validateEmail()
    setIsSubmit(true);

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
        name: name,
        email: email,
        password: password,
        role:role
      });

      console.log(response.status);

      if (response.status === 200) {
        setUsername('');
        setEmail('');
        setPassword('');
        navigate('/');
      }
    } catch (error) {
      alert(error);
      setIsSubmit(false);
    }

    if (isSubmit) {
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div  className='logmain'>
      <form style={{height: '100%'}}className="login-form" onSubmit={handleSubmit}>
        <div>
          <h1 className='sig'>SignUp</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder='Username'
            id="username"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder='Email'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option className='sl' value="">Select the Role</option>
            <option value="Student">Student</option>
            <option value="Instructor">Admin</option>
          </select>
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='Check Password'
            id="checkPassword"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className='error'>{error}</p>}
        <button type="submit">Sign Up</button>
        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default SignUp;