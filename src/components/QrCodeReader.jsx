import React, { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useParams } from "react-router-dom";

const qrcodeId = "reader";

const QrCodeReader = () => {
  const { id } = useParams();
  
  let html5QrCode;
  useEffect(() => {
    if (!html5QrCode?.getState()) {
      html5QrCode = new Html5Qrcode(qrcodeId);
      
      const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        html5QrCode
          .stop()
          .then((ignore) => {
            console.log(decodedText);
            if (decodedText === "fga/estacao1") {
              fetch("https://6ba1874bcbb7-3844250874439741228.ngrok-free.app/fechar_trava")
                .then(response => response.text()) // change this line
                .then(data => {
                  const parser = new DOMParser();
                  const htmlDoc = parser.parseFromString(data, 'text/html');
                  const message = htmlDoc.querySelector('h2').textContent;
                  alert(message);
                })
                .catch(error => {
                  console.error('Error:', error);
                });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.777778,
      };
      
      html5QrCode.start(
        { facingMode: "environment" },
        config,
        qrCodeSuccessCallback
      );
    }
    
    return () => {};
  }, []);

  return <div id={qrcodeId}></div>;
};

export default QrCodeReader;
