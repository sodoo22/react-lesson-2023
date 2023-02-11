import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import images from "../data/images";

const SwiperUI = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  return (
    <main>
      {/* undsen zurag garah swiper */}
      <Swiper
        modules={[Thumbs]}
        onSlideChange={(e) => {
          setActiveImage(e.activeIndex);
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        slidesPerView={1}
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image.id}>
              <img src={image.url} style={{ width: "100%", height: "500px" }} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* thumbnail garah swiper - neg huudas deer 4 zurag garna */}
      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={image.id}>
              <div style={{ position: "relative" }}>
                <img
                  src={image.url}
                  style={{ width: "100%", height: "200px" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor:
                      index == activeImage ? "rgba(0,0,0,0.5)" : "transparent",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};

export default SwiperUI;
