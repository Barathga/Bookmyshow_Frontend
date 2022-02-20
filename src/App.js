import React from 'react';
import './App.css';
import Homepage from './Homepage';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Contact from './ContactUs';
import About from './AboutUs';
import Offers from './Offers';
import Gift from './Gift';
import Admin from './Admin';
import User from './User';
import Logout from './Logout';
import Bookit from './Bookit';
import Aboutmovie from './Aboutmovie'



function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path = "/" element = {<Homepage/>}></Route>
      <Route path="/offers" element={<Offers/>}></Route>
      <Route path="/gift" element={<Gift/>}></Route>
      <Route path="/contactus" element={<Contact/>}></Route>
      <Route path="/aboutus" element={<About/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/user" element={<User/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="/Bookit" element={<Bookit/>}></Route>
      <Route path="/Aboutmovie" element={<Aboutmovie/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
