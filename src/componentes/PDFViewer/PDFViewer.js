import React from 'react';
const PDFViewer = ({ pdfURL }) => {
  return (

      <iframe src={pdfURL} title="Visor de PDF" width="100%" height="600px" frameBorder="1px"></iframe>

  );
};

export default PDFViewer;
