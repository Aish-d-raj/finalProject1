import React from "react";
import { Carousel } from 'react-bootstrap';
import pic1 from './images/carousel_1.jpg'
import pic2 from './images/carousel_2.jpg'
import pic3 from './images/carousel_3.jpg'




class CarouselComponent extends React.Component {
render() {
return (
<div>
    <div className='container-fluid' >
        <div className="row">
            <div className="col-sm-12">
                </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" height="400px" src={pic1} alt="First slide"/>
                            <Carousel.Caption>Find your Dream Job</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" height="400px" src={pic3} alt="Second slide"/>
                            <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" height="400px" src={pic2} alt="Third slide"/>
                                <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                </Carousel>
                                </div>
                                </div>
                                </div>
                                </div>
                            )
};
}
export default CarouselComponent;