import React from 'react';
import "./profile.css";
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


const UserProfile = () => {
  return (
    <div>
    
    <div class="container">
  <div class="row">
    <div class="main">
      <div class="info">
        <img src="https://cdn-icons-png.flaticon.com/512/4675/4675250.png" class="prof rounded-circle img-fluid" />
        <h1>RB</h1>
        <hr></hr>
      </div>
      <div class="body">
       <ul class="fa-ul">
         <li><span class="fa-li"><i class="fas fa-heart"></i></span>Username   :     Bhuvaneshwari R</li>
         <li><span class="fa-li"><i class="fas fa-heart"></i></span>Email      :     727721euc021@gmail.com</li>
         <li><span class="fa-li"><i class="fas fa-heart"></i></span>Location   :     Coimbatore</li>
         <li><span class="fa-li"><i class="fas fa-heart"></i></span>PhoneNumber:     8870051808</li>
        </ul>
      </div>
      {/* <div class="footer">
      <Button component={NavLink} to='/Edit' variant="contained"  >Edit profile</Button> 

      </div> */}
    </div>
  </div>
  <div>
  </div>
</div>
</div>


  );
};

export default UserProfile;