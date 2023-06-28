import React, { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useNavigate, useParams } from "react-router-dom";

const qrcodeId = "reader";

const QrCodeReader = () => {
  const { id } = useParams();

  let html5QrCode;
  useEffect(() => {
    if (!html5QrCode?.getState()) {
      // Anything in here is fired on component mount.
      html5QrCode = new Html5Qrcode(qrcodeId);
      const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        html5QrCode
          .stop()
          .then((ignore) => {
            console.log(decodedText);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      const config = {
        fps: 10,
        qrbox: { width: 500, height: 500 },
        aspectRatio: 1.777778,
      };

      // If you want to prefer back camera
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