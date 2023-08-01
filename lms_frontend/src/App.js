import './App.css';
import Login from './components/login1';
import Pass from './components/Select';
import {BrowserRouter as Router, Route,Routes}from 'react-router-dom';
import Signup from './components/Signup';
import About from './components/About';
import Course from './components/Course';
import EnrollmentForm from './components/enroll';
import NavSide from './components/NavSide';
import Topbar from './components/Topbar';
import Work from './components/work';                                                                                                                                                                 
import Learn from './components/Asment';
import Profile from './components/profile';
import Contact from './components/contact';
import { Provider } from 'react-redux';
import store from './components/store';
import Complete from './components/complete';
import NavigationBar from './components/Adminhome';
import ManageUser from './components/ManageUser';
import ManageCourse from './components/ManageCourse';
import Edit from './components/Edit';
import FeedForm from './components/Feedback';
import Test from './components/Test';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
  
    {/* <NavSide/> */}
   <Router>

      <Routes>
      <Route path="/Topbar" element={<Topbar/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Pass" element={<Pass/>}/>
        <Route path='/NavSide' element={<NavSide/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path="/Course" element={<Course/>}/>
        <Route path="/EnrollmentForm" element={<EnrollmentForm/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/Learn" element={<Learn/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Complete" element={<Complete/>}/>
        <Route path="/store" element={<store/>}/>
        <Route path="/Navi" element={<NavigationBar/>}/>
        <Route path="/ManageUser" element={<ManageUser/>}/>
        <Route path="/ManageCourse"element={<ManageCourse/>}/>
        <Route path="/Edit" element={<Edit/>}/>
        <Route path="/Feedback" element={<FeedForm/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </Router> 
    </div>
    </Provider>
  );
}

export default App;