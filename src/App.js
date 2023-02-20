import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import JobsComponent from "./Components/Jobs";
import NavbarComponent from "./Components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavbarComponent/>
      <div>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/home" element = {<Home/>}/>
          <Route path="/Contact" element = {<Contact/>}/>
          <Route path="/Jobs" element = {<JobsComponent/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
