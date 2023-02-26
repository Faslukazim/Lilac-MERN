import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
function Products() {
  return (
    <div className="productpage">
      <Header />
      <div className="heading">
      <h3>Groceries</h3>
      <Link to={"/cart"}>
      <img src="./images/cart.png" alt="" />

      </Link>
      </div>
      

      <div className="productsdiv">
        <article>
          <img className="" src="./images/shopping-bag.png" alt="" />
          <div className="productdetails">
            <div className="nameprice">
              <p>Vegetables</p>
              <p>Price:20</p>
            </div>
            <div className="qtycart">
              <p>Qty:1</p>
              <button className="articlebtn">Add to cart</button>
            </div>
          </div>
        </article>
        <article>
          <img className="" src="./images/shopping-bag.png" alt="" />
          <div className="productdetails">
            <div className="nameprice">
              <p>Vegetables</p>
              <p>Price:20</p>
            </div>
            <div className="qtycart">
              <p>Qty:1</p>
              <button className="articlebtn">Add to cart</button>
            </div>
          </div>
        </article>
        
      </div>
    </div>
  );
}

export default Products;
