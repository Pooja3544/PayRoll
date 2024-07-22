import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css'; 

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        {
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZaTAXlJ1gDWNIPlsKtGeP8f6U1BoZCl6d9h29oMzmagIMSHVaueW-E7s3A&s",
            detailsLine1: "Role : Software Developer",
            detailsLine2: "Designing, Coding, Testing"
        },
        {
            url: "data:image/jpeg;base64,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", 
            detailsLine1:"Role : Data Analyst",
            detailsLine2: "Analyzing data to uncover insights"
        },
        {
            url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwE6DXHTGLRKjJOH7QYTl3dVISi9-Q-PjI-aoWMCc37zoQmIb-5u1pDwVDbg&s",
            detailsLine1: "Role : Qaulity Analyst",
            detailsLine2: "Ensuring product quality"
        }
    ]; 


    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className="slide">
                    <img src={img.url} alt={`Slide ${index}`} />
                        <p className="image-details">{img.detailsLine1}</p>
                        <p className="image-details">{img.detailsLine2}</p>
                </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
