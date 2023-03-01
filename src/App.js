import React, { useState } from "react";
import "./App.css";

function App() {
  const [item1Quantity, setItem1Quantity] = useState(0);
  const [item2Quantity, setItem2Quantity] = useState(0);
  const [item3Quantity, setItem3Quantity] = useState(0);
  const onClickHandlerMinus1 = (event) => {
    setItem1Quantity((prevQuantity) => prevQuantity - 1);
  };
  const onClickHandlerPlus1 = (event) => {
    setItem1Quantity((prevQuantity) => prevQuantity + 1);
  };
  const onClickHandlerMinus2 = (event) => {
    setItem2Quantity((prevQuantity) => prevQuantity - 1);
  };
  const onClickHandlerPlus2 = (event) => {
    setItem2Quantity((prevQuantity) => prevQuantity + 1);
  };
  const onClickHandlerMinus3 = (event) => {
    setItem3Quantity((prevQuantity) => prevQuantity - 1);
  };
  const onClickHandlerPlus3 = (event) => {
    setItem3Quantity((prevQuantity) => prevQuantity + 1);
  };
  return (
    <div className="App">
      <main className="main">
        <h1> Eat. Sleep. Code. Repeat. </h1>
        <h2>ORDER MENU</h2>
        <container className="item-list">
          <div className="item-info">
            <div className="item-prop">
              <h4>Item-1</h4>
              <p>this is a nice item to comsume</p>
            </div>
            <div className="quantity">
              <h3>Quantity</h3>
              <div className="number">
                <button type="button" onClick={onClickHandlerMinus1}>
                  -
                </button>
                <h5>{item1Quantity}</h5>
                <button type="button" onClick={onClickHandlerPlus1}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="item-info">
            <div className="item-prop">
              <h4>Item-2</h4>
              <p>this is a nice item to comsume</p>
            </div>
            <div className="quantity">
              <h3>Quantity</h3>
              <div className="number">
                <button type="button" onClick={onClickHandlerMinus2}>
                  -
                </button>
                <h5>{item2Quantity}</h5>
                <button type="button" onClick={onClickHandlerPlus2}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="item-info">
            <div className="item-prop">
              <h4>Item-3</h4>
              <p>this is a nice item to comsume</p>
            </div>
            <div className="quantity">
              <h3>Quantity</h3>
              <div className="number">
                <button type="button" onClick={onClickHandlerMinus3}>
                  -
                </button>
                <h5>{item3Quantity}</h5>
                <button type="button" onClick={onClickHandlerPlus3}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <button className="order">Order</button>
          </div>
        </container>
      </main>
    </div>
  );
}

export default App;
