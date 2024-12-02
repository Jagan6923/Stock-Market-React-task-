import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const TradeStock = ({ stocks }) => {
    const [selectedStock, setSelectedStock] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [tradeType, setTradeType] = useState("Buy");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add trade logic here
        console.log(`Trade: ${tradeType} ${quantity} of ${selectedStock}`);
    };

    return (
        <div className="d-flex justify-content-center mt-5 tradeStock">
            <Card style={{ width: "100%", maxWidth: "400px" }} >
                <Card.Body>
                    <Card.Text>
                        <h3 className="text-center">Trade Stock</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="stockSymbol">
                                <Form.Label>Stock Symbol: </Form.Label>
                                <Form.Control
                                    as="select"
                                    value={selectedStock}
                                    onChange={(e) => setSelectedStock(e.target.value)}
                                    className="mb-3"
                                >
                                    <option value="">Select Stock</option>
                                    {stocks.map((stock) => (
                                        <option key={stock.symbol} value={stock.symbol}>
                                            {stock.symbol} - {stock.name}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="quantity">
                                <Form.Label>Quantity: </Form.Label>
                                <Form.Control
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    min="1"
                                    className="mb-3"
                                />
                            </Form.Group>

                            <Form.Group controlId="tradeType">
                                <Form.Label>Trade Type: </Form.Label>
                                <Form.Control
                                    as="select"
                                    value={tradeType}
                                    onChange={(e) => setTradeType(e.target.value)}
                                    className="mb-3"
                                >
                                    <option value="Buy">Buy</option>
                                    <option value="Sell">Sell</option>
                                </Form.Control>
                            </Form.Group>

                            <Button variant="primary" type="submit" block>
                                Submit Trade
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TradeStock;