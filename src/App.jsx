import React, { useState } from "react";
import BarcodeScannerPluginRework from "./components/QrCodeReader";


const App = () => {
  const [scannerOpen, setScannerOpen] = useState(false);

  const handleButtonClick = () => {
    setScannerOpen(true);
  };

  return (
    <div>
      <h1>Test qr code</h1>
      {!scannerOpen && (
        <button onClick={handleButtonClick}>Abrir Scanner</button>
      )}
      {scannerOpen && <BarcodeScannerPluginRework />}
    </div>
  );
};

export default App;
