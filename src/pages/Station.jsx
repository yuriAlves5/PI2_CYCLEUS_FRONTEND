import React, { useEffect, useState } from "react";
import BarcodeScannerPluginRework from "../components/QrCodeReader";
import Header from '../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Station.css";




import { EffectCreative, Pagination, Navigation } from "swiper";


const Station = () => {
  const [scannerOpen, setScannerOpen] = useState(false);

  const handleButtonClick = () => {
    setScannerOpen(true);
  };

  

  return (
    <div>
      <Header></Header>

      <div id="station_name">
            Estação UNB/GAMA
      </div>

      <Swiper
        grabCursor={true}
        effect={"creative"}
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
        modules={[EffectCreative,Pagination,Navigation]}
        className="mySwiper"
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
      <div id="button_div">
        {!scannerOpen && (
            <button id="QrCode" onClick={handleButtonClick}>LER QR CODE</button>
        )}
        {scannerOpen && <BarcodeScannerPluginRework />}
      </div>
    </div>
  );
};

export default Station;