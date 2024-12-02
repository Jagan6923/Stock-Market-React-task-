import React from "react";
import { Card } from "react-bootstrap";

export const PortfolioSummary = (props) => {
  return (
    <div className="d-flex justify-content-center mt-5 mb-5 ">
      <Card style={{ width: "20rem" }} className="porfolioSummary">
        <Card.Body>
          <Card.Text>
            <div>
              <h2>
                <strong>Portfolio Summary</strong>
              </h2>
              <h5>
                Total Value: <strong>₹{props.summary.totalValue.toFixed(2)}</strong>
              </h5>
              <h5>
                Stocks Owned: <strong>{props.summary.stockCount}</strong>
              </h5>
              <h5>
                Cash Balance: <strong>₹{props.summary.cashBalance.toFixed(2)}</strong>
              </h5>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PortfolioSummary;