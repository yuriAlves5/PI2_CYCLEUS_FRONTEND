import React, { useEffect, useState } from "react";
import BarcodeScannerPluginRework from "../components/QrCodeReader";
import Header from '../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Station.css";
import Popup from 'reactjs-popup';




import { EffectCreative, Pagination, Navigation } from "swiper";


const Station = () => {
  const [scannerOpen, setScannerOpen] = useState(false);

  const handleButtonClick = () => {
    setScannerOpen(true);
  };
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  

  return (
    <div>
      <Header></Header>

      <div id="station_name">
            Estação UNB/GAMA
      </div>

      <div id="station_description">
          Vaga 
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