import React, { useState } from "react";
import BarcodeScannerPluginRework from "./components/QrCodeReader";
import  Header  from "./components/Header";


const App = () => {
  const [scannerOpen, setScannerOpen] = useState(false);

  const handleButtonClick = () => {
    setScannerOpen(true);
  };

  return (
    <div>
      <Header/>
      {!scannerOpen && (
        <button onClick={handleButtonClick}>Abrir Scanner</button>
      )}
      {scannerOpen && <BarcodeScannerPluginRework />}
    </div>
  );
};

export default App;
