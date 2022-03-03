import React, { Component } from 'react'
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from 'react-router-dom';

export default class Home extends Component{

    render(){

        const images =[require('../images/1.jpg'), require('../images/2.jpg'), require('../images/3.jpg'), require('../images/4.jpg'), require('../images/5.jpg'), require('../images/6.jpg'), require('../images/7.jpg'),
        require('../images/8.jpg'), require('../images/9.jpg'), require('../images/10.jpg'),];


    const zoomOutProperties = {
        duration: 600,
        transitionDuration: 3500,
        infinite: true,
        indicators: false,
        scale: 0.5,
        arrows: false
      };
      
        return(
            <div className="slide-container">
            <div
              style={{
                width: "100%",
                height: "100vh",
                position: "absolute",
                
                zIndex: "-1"
              }}
            >
              <Zoom {...zoomOutProperties}>
                {images.map((each, index) => (
                  <img
                  className='imgs'
                    key={index}
                    alt=""
                    src={each}
                   
                  
                  />
                ))}
              </Zoom>
            </div>
            <Link to='/products'>
            <div className='content'>
                <h2 style={{color:"black"}}>SEMP.AI</h2>


                
            <button>Click any area on your screen</button>
           
            </div>
            </Link>
          </div>
        )
    }
}

