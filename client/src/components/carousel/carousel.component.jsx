import React, { useState } from "react";
import Button from "../button/button.component";
import CarouselItem from "../carouselItem/carousel-item.component";
import "./carousel.styles.scss";
export default function Carousel(props) {
  const banners = props.banners;
  const [slideIndex, setSlideIndex] = useState(1);

 const nextSlide = () => {
    if (slideIndex !== banners.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === banners.length) {
      setSlideIndex(1);
    }
  } 
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(banners.length);
    }
  }
  const moveDot = (index) => {
    setSlideIndex(index + 1);
  };
  return (
    <div className="container-slider">
      <Button btnClass="btn-slide prev" buttonText="Prev" handleClick={prevSlide} />
      {props.banners.map((banner, index) => {
        return (
          <CarouselItem
            banner={banner}
            key={banner.id}
            classappend={`${
              slideIndex === index + 1 ? "slide active-anim" : "slide"
            }`}
          />
        );
      })}
       <Button btnClass="btn-slide next" buttonText="next" handleClick={nextSlide} />
      <div className="container-dots">
        {Array.from({ length: props.banners.length }).map((item, index) => (
          <div
            key={index}
            onClick={moveDot}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
