import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { useHistory } from 'react-router-dom';

const QRCodeReader = () => {
  const [result, setResult] = useState(null);
  const history = useHistory();

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>Leitura de QR Code</h2>
      <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: '100%' }} />
      <button onClick={handleGoBack}>Voltar</button>
      {result && <p>Conteúdo do QR Code: {result}</p>}
    </div>
  );
};

export default QRCodeReader;
