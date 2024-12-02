import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const StockList = ({ stocks }) => {
  const [updatedStocks, setUpdatedStocks] = useState(stocks);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedPrices = updatedStocks.map((stock) => ({
        ...stock,
        price: stock.price + (Math.random() > 0.5 ? 1 : -1) * 5, // Random price change
      }));

      setUpdatedStocks(updatedPrices);
    }, 5000); 

    return () => clearInterval(interval);
  }, [updatedStocks]);

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "20rem" }} className="stockList">
        <Card.Body>
          <Card.Text>
            <h3>Stock List</h3>
            <ul>
              {updatedStocks.map((stock) => (
                <li key={stock.symbol}>
                  {stock.symbol} - {stock.name} - ${stock.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StockList;