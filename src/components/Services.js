import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Services = () => {
  return (
    <>
    
    <div className="text-center mt-4 mb-3">
      <h1>Our Services</h1>
    </div>
      <div className="row mt-4 mb-4 row-cols-1 row-cols-md-2 g-4 mx-3 md:mx-8 lg:mx-16 ">
        <div className="row ">
          <div className="col-sm-6">
            <div className="card border border-gray-300 shadow hover:border-blue-500">
              <img src="bridal.jpg" class="card-img-top img-fluid" alt="Bridal"></img>
              <div className="card-body">
                <h5 className="card-title text-center">Bridal Makeup</h5>
                <p className="card-text text-justify">
                Your wedding day is one of the most special moments in your life, and we are here to make it even more memorable. Our bridal makeup service focuses on accentuating your features while complementing your wedding theme and personal style. Whether you prefer a classic, romantic, or contemporary look, we'll ensure you radiate elegance and grace on your big day.
                </p>
                <Link to="/bookservice" className="btn btn-primary d-grid gap-2 col-6 mx-auto">
                Book Service
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card border border-gray-300 shadow hover:border-blue-500">
              <img src="ocaa.jpg" class="card-img-top img-fluid" alt="ocassional"></img>
              <div className="card-body">
                <h5 className="card-title text-center">Special Occasion Makeup</h5>
                <p className="card-text text-justify">
                From red-carpet events to gala dinners and milestone celebrations, our special occasion makeup service will make you stand out in any crowd. We work closely with you to understand your preferences and create a custom look that aligns with the event's ambiance and your outfit.Whether you prefer a classic, romantic, or contemporary look.
                </p>
                <Link to="/bookservice" className="btn btn-primary d-grid gap-2 col-6 mx-auto">
                Book Service
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-6 ">
            <div className="card border border-gray-300 shadow hover:border-blue-500 ">
              <img src="gl.jpg" class="card-img-top" alt="galm eeveng"></img>
              <div className="card-body ">
                <h5 className="card-title text-center">Glam and Evening Makeup</h5>
                <p className="card-text text-justify">
                Planning a night out or an exciting evening event? Our glam and evening makeup service is tailored to create a bold and captivating look that matches the high-spirited atmosphere of the occasion. Whether you desire smokey eyes, luscious lips, or a striking contour, we have the expertise to make you look glamorous and feel fabulous.
                </p>
                <Link to="/bookservice" className="btn btn-primary d-grid gap-2 col-6 mx-auto">
                Book Service
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card border border-gray-300 shadow hover:border-blue-500">
              <img src="ever.webp" class="card-img-top" alt="everyday"></img>
              <div className="card-body">
                <h5 className="card-title text-center">Natural and Everyday Makeup</h5>
                <p className="card-text text-justify">
                For those who prefer a more subtle and fresh look, our natural and everyday makeup service is the perfect fit. We focus on enhancing your natural beauty while ensuring your makeup complements your lifestyle and daily routine. You'll walk away feeling confident and ready to conquer the day with a radiant glow.
                </p>
                <Link to="/bookservice" className="btn btn-primary d-grid gap-2 col-6 mx-auto">
                  Book Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Services;
