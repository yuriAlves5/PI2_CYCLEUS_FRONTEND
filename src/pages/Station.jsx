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
import Arrow_forward from "../assests/Arrow_forward.svg";
import Arrow_back from "../assests/Arrow_back.svg";
import bike from "../assests/bike_1.png";

const Station = () => {
  const [scannerOpen, setScannerOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [numVagas, setNumVagas] = useState(0);
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

  useEffect(() => {
    const fetchNumVagas = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const quantidadeVagas = 7;
      setNumVagas(quantidadeVagas);
    };

    fetchNumVagas();
  }, []);

  useEffect(() => {
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      const swiperInstance = mainSwiperRef.current.swiper;
      swiperInstance.on('slideChange', () => {
        setActiveSlide(swiperInstance.activeIndex);
      });
    }
  }, []);

  const renderSlides = () => {
    const slides = [];
  
    for (let i = 1; i <= numVagas; i++) {
      slides.push(
        <SwiperSlide key={i}>
          <img src={bike} alt={`Bike ${i}`} />
        </SwiperSlide>
      );
    }
  
    return slides;
  };

  const renderPreviewSlides = () => {
    const slides = [];
  
    for (let i = 1; i <= numVagas; i++) {
      slides.push(
        <SwiperSlide key={i}>
          <div className="slideNumber">{i}</div>
        </SwiperSlide>
      );
    }
  
    return slides;
  };

  return (
    <div>
      <Header />

      <div id="station_name">
        Estação UNB/GAMA
      </div>

      <div id="station_description">
        Vaga {activeSlide + 1}
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
          swiper.on('slideChange', () => {
            setActiveSlide(swiper.activeIndex);
          });
        }}
      >
        {renderSlides()}
      </Swiper>

      <div id="previewDiv">
        <div className="arrowContainer">
          <img id="arrow_back" src={Arrow_back} onClick={prevGroup} alt="Arrow Back" />
        </div>
        <Swiper
          onSwiper={(swiper) => {
            thumbsSwiperRef.current = swiper;
          }}
          slidesPerView={3}
          slidesPerGroup={3}
          watchSlidesVisibility={true}
          watchSlidesProgress={true}
          navigation={false}
          onClick={(swiper) => {
            const clickedIndex = swiper.clickedIndex;
            mainSwiperRef.current.slideTo(clickedIndex);
            setActiveSlide(clickedIndex);
          }}
          id="thumbsSwiper"
        >
          {renderPreviewSlides()}
        </Swiper>
        <div className="arrowContainer">
          <img id="arrow_forward" src={Arrow_forward} onClick={nextGroup} alt="Arrow Forward" />
        </div>
      </div>

      <div id="button_div">
        <button type="button" id="QrCode" onClick={() => setOpen((o) => !o)}>
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
