import React, { useState } from 'react';
import './Edit.css';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const[username,setusername]=useState('');
    const[Role,setRole]=useState('');
    const[phonenumber,setPhonenumber]=useState('');
    const [email, setEmail] = useState('');
    const Navigate = useNavigate();
    const eventNavigate=()=>{
        Navigate("/Userprofile")
    }
    const handleusername =(event)=>{
        setusername(event.target.value);
  }
  const handleRole =(event)=>{
    setRole(event.target.value);
  }
  
  const handlePhonenumber=(event)=>{
    setPhonenumber(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    document.write('Successfully registerd');
    console.log('username: ',username);
    console.log('Email:', email);
    console.log('Location:',Role);
    console.log('PhoneNumber:',phonenumber);

  };

  return (
    <div className="down">
    <div className="login-form">
      <h2>Edit</h2>
      <div onSubmit={handleSubmit}>
        <input
        type="username"
        placeholder='UserName'
        value={username}
        onChange={handleusername}
        required
        /> <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        required
      />
        <input
        type="location"
        placeholder="Location"
        value={Role}
        onChange={handleRole}
        required
        />
        <input
        type="phonenumber"
        placeholder='PhoneNumber'
        value={phonenumber}
        onChange={handlePhonenumber}
        required
        />
       

        <button type="submit" onClick={eventNavigate}>Change</button>
        {/* <link>Sign up</link> */}
      </div>
    </div>
    </div>
  );
};

export default Edit;