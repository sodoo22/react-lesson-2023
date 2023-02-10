import { Swiper, SwiperSlide } from "swiper/react";
import images from "../data/images";
import { useState, useRef } from "react";
import { Freemode, Thumbs } from "swiper";

const SpiwerUI = function () {
  const swiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = images.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={image.url} alt="image" />
      </SwiperSlide>
    );
  });
  return (
    <div>
      <h1>Swiper-JS with React</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      ></Swiper>
      {slides}
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={setThumbsSwiper}
      ></Swiper>
      {slides}
    </div>
  );
};

export { SpiwerUI };
