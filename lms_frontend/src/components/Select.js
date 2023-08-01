import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './select.css';
class Pass extends Component{
    render() {
      return (
        <center>
        <div className="pass">
        
           
            <div className="root">
                 <h1><center>ABH ACADEMY</center></h1><br></br>
          
              <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689002016/th_u9ydos.jpg"alt="imag" width="350px"/>
              </div>
              <div className='newcls'>
                 <ul className="good">
                  <li className="bad">
                <Link to='/NavSide'><button className='stu'>STUDENT</button></Link></li>
                 <li className="bad"><Link to='/mypass'><button className='admin'>&nbsp;&nbsp;ADMIN&nbsp;</button></Link></li>
                <li className="bad"><Link to='/OnDuty'><button className='instr'>&nbsp;INSTRUCTOR</button></Link></li> 
                </ul>
              </div>
              
            
            
         
          </div>
         
          </center>
         
        
      );
    }
  }
  export default Pass;