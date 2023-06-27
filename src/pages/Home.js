import React, { useEffect } from 'react';
import Html5QrcodeScanner from 'html5-qrcode';

function onScanSuccess(decodedText, decodedResult) {
  // Handle on success condition with the decoded text or result.
  console.log(`Scan result: ${decodedText}`, decodedResult);
}

const Home = () => {
  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner(
      "reader", { fps: 10, qrbox: 250 }
    );
    html5QrcodeScanner.render(onScanSuccess);

    return () => {
      html5QrcodeScanner.clear();
    };
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao Bicicletário Eletrônico!</h1>
      <p>Este é um aplicativo para gereciamento de bicicletário com travas por QR code.</p>
      <div style={{ width: '500px' }} id="reader"></div>
    </div>
  );
};

export default Home;
