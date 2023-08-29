import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formvalidation } from "../utility/Formvalidation";
import Login from "./Login";

const Signup = () => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "",
    terms: false,
  });

  const [userCheck, setUserCheck] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // setUserData(...userData,{name : value})
    setUserData({ ...userData, [name]: value });
    setUserCheck(e.target.checked)
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if(Formvalidation(userData)){

      console.log(userData);

      // <Login userData={userData}/>
    
      localStorage.setItem(`${userData.email}`, JSON.stringify(userData));
    }
    
  };

  const handleStorage = () => {
    // const newData = JSON.parse(localStorage.getItem(`${userData.email}`));
    // console.log(newData);
    // console.log(newData.role);
  };

  const handleDeleteStorage =()=>{
    localStorage.clear()
  }

  return (
    <>
      <div>
        <form>
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            name="fname"
            onChange={handleChange}
            value={userData.fname}
          />
          <br />
          <label htmlFor="lname">Last name</label>
          <input
            type="text"
            name="lname"
            onChange={handleChange}
            value={userData.lname}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={userData.password}
          />
          <br />

          <label htmlFor="role">Role</label>
          <br />

          <input
            type="radio"
            name="role"
            id="admin"
            onChange={handleChange}
            value="Admin"
          />
          <label htmlFor="admin">Admin</label>
          <input
            type="radio"
            name="role"
            id="vendor"
            onChange={handleChange}
            value="Vendor"
          />
          <label htmlFor="vendor">Vendor</label>
          <input
            type="radio"
            name="role"
            id="customer"
            onChange={handleChange}
            value="Customer"
          />
          <label htmlFor="customer">Customer</label>
          <br />

          <input
            type="checkbox"
            id="terms"
            name="terms"
            onChange={handleChange}
            value={userCheck}
          />
          <label htmlFor="terms">I agree with Terms of service</label>
          <br />
          <input type="submit" onClick={handleSubmit} />
        </form>
      </div>
      <div>
        Already have an account? <Link to="/login">Sign-in</Link>
      </div>
      <div>
        <button onClick={handleStorage}>Get local storage DATa</button>
      </div>
      <div>
        <button onClick={handleDeleteStorage}>Delete Local Storage</button>
      </div>
    </>
  );
};

export default Signup;
