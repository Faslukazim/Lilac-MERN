import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
function Home() {
  const [Loginsign, setLoginsign] = useState(true);
  const [Signupdata, setSignupdata] = useState();
  const [Logindata, setLogindata] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    setLoginsign(!Loginsign);
  };
  const inputChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setSignupdata({ ...Signupdata, [name]: value });
    setLogindata({ ...Logindata, [name]: value });
    console.log(Signupdata);
    console.log(Logindata);
  };
  const SignupSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3034/signup", Signupdata).then((response) => {
      console.log(response);
    });
  };
  const LoginSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3034/login", Logindata).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="home">
      <Header />

      <div className="formdiv">
        {Loginsign ? (
          <form>
            <h3>Login Here</h3>
            <div className="loginsignup">
              <button className="loginbtn">Login</button>
              <button onClick={handleClick} className="signbtn">
                Signup
              </button>
            </div>
            <button></button>
            <label htmlFor="username">Username</label>
            <input
              onChange={inputChange}
              type="text"
              placeholder="Email or Phone"
              name="username"
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={inputChange}
              type="password"
              placeholder="Password"
              name="password"
            />
            <button onClick={LoginSubmit} className="formloginbtn">
              Log In
            </button>
          </form>
        ) : (
          <form>
            <h3>Signup Here</h3>
            <div className="loginsignup">
              <button onClick={handleClick} className="loginbtn">
                Login
              </button>
              <button className="signbtn">Signup</button>
            </div>
            <button></button>
            <input
              onChange={inputChange}
              type="text"
              placeholder="Your name"
              name="name"
            />
            <input
              onChange={inputChange}
              type="text"
              placeholder="Email or Phone"
              name="username"
            />
            <input
              onChange={inputChange}
              type="password"
              placeholder="Password"
              name="password"
            />
            <input
              onChange={inputChange}
              type="password"
              placeholder="Confirm-Password"
              name="cpassword"
            />
            <button className="formsignbtn" onClick={SignupSubmit}>
              Sign Up
            </button>
          </form>
        )}

        <div className="homeright">
          <h3>Fresh Groceries and Medicines at Your Doorstep</h3>
          <div className="items">
            <img className="vibrate" src="./images/shopping-bag.png" alt="" />
            <img className="vibrate" src="./images/medicines.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
