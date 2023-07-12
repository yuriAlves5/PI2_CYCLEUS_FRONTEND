import React, { useEffect, useState, useRef } from "react";
import BarcodeScannerPluginRework from "../components/QrCodeReader";
import Header from '../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Station.css";
import Popup from 'reactjs-popup';
import { Navigation } from 'swiper';
import "swiper/css/navigation";

const Station = () => {
  const [scannerOpen, setScannerOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const handleButtonClick = () => {
    setScannerOpen(true);
  };

  const nextGroup = () => {
    thumbsSwiperRef.current.slideNext();
  };

  const prevGroup = () => {
    thumbsSwiperRef.current.slidePrev();
  };

  return (
    <div>
      <Header />

      <div id="station_name">
        Estação UNB/GAMA
      </div>

      <div id="station_description">
        Vaga #{activeSlide}
      </div>

      <Swiper
        grabCursor={true}
        effect="creative"
        pagination={true}
        navigation={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => {
          mainSwiperRef.current = swiper;
          swiper.on('slideChange', () => setActiveSlide(swiper.activeIndex + 1));
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      <button onClick={prevGroup}>Prev</button>
      <Swiper
        onSwiper={(swiper) => {
          thumbsSwiperRef.current = swiper;
        }}
        slidesPerView={3}
        slidesPerGroup={3}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        navigation={false}
        onClick={(swiper) => {
            const clickedIndex = swiper.clickedIndex;
            mainSwiperRef.current.slideTo(clickedIndex);
            setActiveSlide(clickedIndex + 1);
        }}
        id="thumbsSwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <button onClick={nextGroup}>Next</button>

      <div id="button_div">
        <button type="button" id="QrCode" onClick={() => setOpen(o => !o)}>
          LER QR CODE
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className="modal">
            <a className="close" onClick={closeModal}>
              &times;
            </a>
            <BarcodeScannerPluginRework />
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Station;
