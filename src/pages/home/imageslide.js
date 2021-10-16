import React, { useState,useEffect } from "react";
import slides from "./imageImports";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    setTimeout(
      () =>
        setCurrent((prevIndex) =>{
          return prevIndex === length - 1 ? 0 : prevIndex + 1;
        }
        ),2000
    );
  }, [current]);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.url} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
