import React from "react";
import { Link } from "react-router-dom";
import CarouselComponent from "./Carousel";
import './css/Home.css'
const Home= () =>{
    return(
        <div className="mainsec">
           <CarouselComponent/>
           <div className="section">
               <div className="sec1">
                <Link to='/Jobs'>
                <button className="btn btn-dark">Jobs</button>
                </Link>
                  
                 </div>
                <div className="sec2">
                  <Link to='/Contact'>
                  <button className="btn btn-dark">ContactUs</button>
                  </Link>
                   </div>
                   
                <div className="sec3">
                  <button className="btn btn-dark">Coming Soon...</button>
                   </div>
           </div>
        </div>
    )
}

export default Home;