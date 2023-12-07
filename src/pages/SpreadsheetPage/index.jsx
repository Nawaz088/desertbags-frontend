// SpreadsheetPage.js

import React, { useState, useEffect } from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective } from '@syncfusion/ej2-react-spreadsheet';
import '@syncfusion/ej2-react-spreadsheet/styles/material.css';

const SpreadsheetPage = () => {
  const [data, setData] = useState([]);

  // Fetch data from the server when the component mounts
  useEffect(() => {
    fetchDataFromServer();
  }, []);

  const fetchDataFromServer = async () => {
    try {
      // Fetch data from your server endpoint (e.g., /api/fetch-data)
      const response = await fetch('/api/fetch-data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Define the structure of the spreadsheet based on the fetched data
  const configureSpreadsheet = () => {
    // Modify this based on your data structure
    const sheets = [
      {
        rangeSettings: [{ dataSource: data, startCell: 'A1' }],
      },
    ];

    return sheets;
  };

  return (
    <div>
      <h1>Spreadsheet Page</h1>
      <SpreadsheetComponent>
        <SheetsDirective>
          <SheetDirective dataSourceSettings={configureSpreadsheet()} />
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
};

export default SpreadsheetPage;
