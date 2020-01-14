import React, { useState, useEffect } from 'react';
import { BaseUrl } from '../../Const';
import { Slide } from 'react-slideshow-image';
import axios from 'axios';


const Slider = (props) => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: BaseUrl + '/slider',
        })
            .then(function (response) {
                if (response.status === 200) {
                    setSlides(response.data)
                }
            }).catch(function (error) {
                console.log(error)
            });
    }, [])
    const slideShowProperties = {
        infinite: true,
        indicators: true,
        arrows:false,
        autoplay: true,
      }
    const slideShow = slides.map((slide,index)=>{
        return(
            <div className="each-slide" key={index}>
                <div className="image" style={{'backgroundImage': `url(${slide.image})`}}>
                    <div className="slider-text-container center">
                        <div className="slider-text title">{slide.title}</div>
                        <div className="slider-text subtitle">{slide.subtitle}</div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="slide-container">
            <Slide {...slideShowProperties}>{slideShow}</Slide>
        </div>
    )
}

export default Slider

