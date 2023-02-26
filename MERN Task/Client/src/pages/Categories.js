import React, { useState } from "react";
import Header from "../components/Header";

function Categories() {
  const [grocerymedicine, setGrocerymedicine] = useState(true);
  const handleClick=(e)=>{
e.preventDefault()
setGrocerymedicine(!grocerymedicine)
  }
  return (
    <div className="Categoriespage">
      <Header />
      <h3>Categories</h3>
      <div className="categorymain">
        <div className="categoriesdiv">
          <article>
            <img className="" src="./images/shopping-bag.png" alt="" />
            <h4>Groceries</h4>
          </article>
          <article>
            <img className="" src="./images/medicines.png" alt="" />
            <h4>Medicines</h4>
          </article>
        </div>
        <div className="addproductdiv">
          {grocerymedicine ? (
            <form>
              <h3>Add Products</h3>
              <div className="grocerymedicine">
                <button className="grocerybtn">Groceries</button>
                <button
                  onClick={handleClick}
                  className="medicinebtn"
                >
                  Medicines
                </button>
              </div>
              <button></button>
              <input type="text" placeholder="Product name" id="productname" />
              <input
                type="text"
                placeholder="Product Price"
                id="productprice"
              />
              <button className="formgrocerybtn">Add</button>
            </form>
          ) : (
            <form>
              <h3>Add Medicine</h3>
              <div className="grocerymedicine">
                <button
                  onClick={handleClick}
                  className="grocerybtn"
                >
                  Groceries
                </button>
                <button className="medicinebtn">Medicines</button>
              </div>
              <button></button>
              <input type="text" placeholder="Product name" id="productname" />
              <input
                type="text"
                placeholder="Product Price"
                id="productprice"
              />
              <button className="formmedicinebtn">Add</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
