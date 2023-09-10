import React from "react";
import { Link } from "react-router-dom";


const Cart = () => {
  return (<>
    
    
      <div className="card mt-4 border border-gray-300 shadow hover:border-blue-500 container" style={{ width: "20rem" }}>
        <img src="logo.png" className="card-img-top mt-2 " alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">Namaste...</h5>
          <p className="card-text text-center">
            Feel Free To Shop
          </p>
          <Link to="/login" className="btn btn-primary d-grid gap-2 col-6 mx-auto mb-3">
            Fill The Booking Form
          </Link>
        </div>
      </div>
      <div className="text mt-3">
      <h3 className="text-center">Thank you for choosing us for your beauty and skincare needs</h3>
      <h6 className="text-center"> We look forward to serving you and making your shopping journey a delightful one</h6><br/>
      <h6 className="text-center">Happy Shopping!</h6>
      </div>
    </>
  );
};

export default Cart;
