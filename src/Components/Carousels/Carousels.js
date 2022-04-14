import React from 'react';
import { Carousel } from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';
import './Carosusels.css'

const Carousels = () => {
    // const {pathname}=useLocation()
    // style={pathname.includes('blog')?{display:"none"}:{display:"block"}} 
    return (
        <Carousel className='Carousel-container'>
            <Carousel.Item>
                <img
                    className="d-block slide "
                    src={require('../../images/lance-asper--pSOAtdMVlk-unsplash.jpg')}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, delectus!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block slide"
                    src={require('../../images/calvin-dahne-WX9bvBTUzB4-unsplash.jpg')}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block slide"
                    src={require('../../images/brad-r-xt9nZR_enkw-unsplash.jpg')}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carousels;