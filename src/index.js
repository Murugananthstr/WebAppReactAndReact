import React, {useState, useEffect} from 'react';
import {render} from 'react-dom';

function Hi()
{
    debugger;
    return <>Hi</>;
}

export const App1 = () => {
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://finance.google.com/finance/info?q=NASDAQ:AAPL"
      );
      const data = await response.text();
      const jsonData = JSON.parse(data.substring(3));
      setStockData(jsonData[0]);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Stock Information</h1>
      <p>Symbol: {stockData.t}</p>
      <p>Current price: {stockData.l}</p>
    </div>
  );
};

render(<App1/>, document.getElementById("app"));