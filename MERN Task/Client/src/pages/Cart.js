import React from "react";
import Header from "../components/Header";

function Cart() {
  return (
    <div className="cartpage">
      <Header />
      <h3>Shopping Cart</h3>
      <div className="cartdiv">
        <article>
          <h4>FreshB</h4>
          <h4 className="carth4">item</h4>
          <h4 className="carth4">Quantity</h4>
          <h4 className="carth4">Amount</h4>
        </article>
        <article>
          <img className="" src="./images/shopping-bag.png" alt="" />
          <h4>Vegetables</h4>
          <div className="qtybtns">
            <button className="cartarticlebtn">-</button>
            <button className="cartarticlebtn">+</button>
          </div>
          <h4>Price: 20rs</h4>
        </article>
        <article>
          <img className="" src="./images/medicines.png" alt="" />
          <h4>Medicines</h4>
          <div className="qtybtns">
            <button className="cartarticlebtn">-</button>
            <button className="cartarticlebtn">+</button>
          </div>

          <h4>Price: 50rs</h4>
        </article>
        <div className="checkoutdiv">
          <button className="cartarticlebtn">Check out</button>
          <h2>Total: 70rs</h2>
        </div>
      </div>
    </div>
  );
}

export default Cart;
