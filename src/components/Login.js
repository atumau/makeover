import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import firebase from "firebase/app";
import "firebase/database";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, message } = user;

    if((name && email && phone && address && message)){
      const res = await fetch(
        "https://makeart-acec3-default-rtdb.firebaseio.com/makeoverform.json",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );
      if(res){
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        }); 
        alert("Data Send")
      }
    }else{
      alert("Please Fill the Form")
    }

    
  };

  return (
    <>
      

      <div className="container  mt-4 border border-gray-300 shadow hover:border-blue-500">
        <div>
          <h2 className="text-center mt-3">---- Booking Form ----</h2>
          <form className="contact100-form" method="POST">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Your Name"
                value={user.name}
                onChange={getUserData}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                value={user.email}
                onChange={getUserData}
                autoComplete="off"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone:
              </label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={user.phone}
                onChange={getUserData}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                placeholder="Enter Your Address"
                value={user.address}
                onChange={getUserData}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                name="message"
                rows={5}
                defaultValue={""}
                placeholder="Enter Your Booking Requirements"
                value={user.message}
                onChange={getUserData}
                autoComplete="off"
                required
              />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto mb-3">
              <button
                className="btn btn-primary"
                onClick={postData}
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
};

export default Login;
