// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { setEmail, setPass, setName } from './action';
// import axios from 'axios';
// import './login1.css';

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     fontFamily: 'Arial, sans-serif',
//   },
//   login: {
//     width: '400px',
//     padding: '40px',
//     border: '2px solid black',
//     borderRadius: '4px',
//     backgroundColor: '#F7F7F7',
//   },
//   title: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#333',
//     textTransform: 'uppercase',
//   },
//   formGroup: {
//     marginBottom: '20px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   },
//   button: {
//     width: '30%',
//     padding: '10px',
//     fontSize: '16px',
//     backgroundColor: '#33bbff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginLeft:'140px',
//   },
//   registerLink: {
//     display: 'block',
//     marginTop: '10px',
//     textAlign: 'center',
//     textDecoration: 'none',
//     color: '#333',
//   },
// };


// function Login({
//   email,
//   pass,
//   name,
//   setEmail,
//   setName,
//   setPass,
// }) {
//   const [role, setRole] = useState('');
  
//   const navigate = useNavigate();
//   const check = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8181/api/v1/auth/authenticate",
//         {
//           name:name,
//           email: email,
//           password: pass,
//         }
//         );
        
//         console.log(response.data);
//         localStorage.setItem('token', response.data.token);
//         console.log(localStorage.getItem('token'));
        
//         alert("Successfully Logged In");
    
//         if(role === 'student') {
//           navigate('/NavSide'); 
//         } else if (role === 'admin') {
//           navigate('/Navi'); 
//         }
      
//       } catch (error) {
//         console.log(error);
//           alert("Invalid Credentials");
//       }
//     };
 
  
//   const [checkpass, setCheckPass] = useState(false);
  
//   return (
//     <div className="tall">
//     <div style={styles.container}>
//       <div style={styles.login}>
//         <form onSubmit={check}>
//           <h2 style={styles.title}>Login</h2>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Username:</label>
//             <input
//               style={styles.input}
//               type="text"
//               name="name"
//               value={name}
//               placeholder="Enter your username"
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Email:</label>
//             <input
//               style={styles.input}
//               type="email"
//               name="email"
//               value={email}
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Password:</label>
//             <input
//               style={styles.input}
//               type="password"
//               name="pass"
//               value={pass}
//               onChange={(e) => setPass(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//           <label style={styles.label}>Role</label>
//           <input style={styles.input}
//           type="text"
//            placeholder='Role'
//             id="role"
//            value={role}
//             autoComplete='off'
//       onChange={(e) => setRole(e.target.value)}
//       required
//   />
//   </div>

//           <button style={styles.button} type="submit">
//             Login
//           </button>
//           {checkpass && alert('Successful login ' + name)}
//           {checkpass && navigate('/home')}
//           <Link to="/signup" style={styles.registerLink}>
//             Don't have an account? Register
//           </Link>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     email: state.login.email,
//     pass: state.login.pass,
//     name: state.login.name,
//   };
// };

// const mapDispatchToProps = {
//   setEmail,
//   setPass,
//   setName,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);


import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login1.css';
import { setEmail, setPass, setName } from './action';
import './store';
const styles = 
{
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  login: {
    width: '400px',
    padding: '40px',
    borderRadius: '4px',
    border: '2px solid black',
   backgroundColor: '#F7F7F7',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '30%',
    padding: '10px',
    fontSize: '16px',
    color: 'blue',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft:'140px',
  },
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#333',
  },
};


function Login({
  email,
  pass,
  name,
  setEmail,
  setName,
  setPass,
}) {
  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8181/api/v1/auth/authenticate',
        {
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));
      const user = {
        email,
      };

      if(role === 'student') {
        navigate('/NavSide'); 
      } else if (role === 'admin') {
        navigate('/Navi'); 
      }
    } catch (error) {
      console.log(error);
      window.alert('Invalid Credentials');
    }
  };
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);
  return (
    <div className='tall'>
     <div style={styles.container}>
      <div style={styles.login}>
        <form onSubmit={check}>
          <h2 style={styles.title}>Login</h2>
         
          <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
            <input
              style={{height:'37px',width:'100%',fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',}} 
 
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
            <input
            style={{height:'37px',width:'100%',fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',}} 

              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div style={styles.formGroup}>
          <label style={styles.label}>Role</label>
          <input style={styles.input}
          type="text"
           placeholder='Role'
            id="role"
           value={role}
            autoComplete='off'
      onChange={(e) => setRole(e.target.value)}
      required
  />
  </div>
          <button style={{marginLeft:'40%'}} type="submit">
            Login
          </button>
          {checkpass && alert('Successful login ' + name)}
          {checkpass && navigate('/home')}
          <Link to="/signup" style={styles.registerLink}>
            Don't have an account? Register
          </Link>
        </form>
      </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);