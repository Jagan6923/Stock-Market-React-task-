import React from "react";
import { Card } from "react-bootstrap";

const PortfolioDetails = ({ portfolio, stocks }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "20rem" }} className="portfolioDetails">
        <Card.Body>
          <Card.Text>
            <h3>Portfolio Details</h3>
            <ul>
              {Object.keys(portfolio).map((symbol) => {
                const stock = stocks.find((stock) => stock.symbol === symbol);
                return (
                  <li key={symbol}>
                    {stock.symbol} - {stock.name} - Quantity: {portfolio[symbol]} - Current Value: $
                    {portfolio[symbol] * stock.price}
                  </li>
                );
              })}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PortfolioDetails;