import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioSummary from "./PortfolioSummary";
import StockList from "./StockList";
import PortfolioDetails from "./PortfolioDetails";
import TradeStock from "./TradeStock";
import "./App.css";

function App() {
  const [portfolioDetails, setPortfolioDetails] = useState({
    totalValue: 5550,
    stockCount: 12,
    cashBalance: 5000,
  });

  const portfolio = {
    AAPL: 10,
    TSLA: 5,
  };

  const stocks = [
    { symbol: "AAPL", name: "Apple", price: 150 },
    { symbol: "TSLA", name: "Tesla", price: 700 },
    { symbol: "GOOG", name: "Google", price: 2800 },
  ];

  return (
    <Container className="mt-5">
      <nav>
        <h1>Stock Market Portfolio </h1>
      </nav>

      {/* First Row (Left side and Right side cards) */}
      <Row className="d-flex justify-content-between">
        {/* Left side (PortfolioSummary + StockList) */}
        <Col md={6}>
          <PortfolioSummary summary={portfolioDetails} />
          <StockList stocks={stocks} />
        </Col>

        {/* Right side (PortfolioDetails + TradeStock) */}
        <Col md={6}>
          <PortfolioDetails portfolio={portfolio} stocks={stocks} />
          <TradeStock stocks={stocks} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;