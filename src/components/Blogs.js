import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Blogs = () => {
  return (
    <>
      
      <h1 className="text-center">Our@Memories</h1>
      <div className="card-group gap-3 mt-3 mb-3 mx-3 md:mx-8 lg:mx-16">
        <div className="card border border-gray-300 shadow hover:border-blue-500">
          <img
            src="upper1.jpeg"
            className="card-img-top border border-3"
            alt="..."
          />
          <div className="card-body ">
            <p className="card-text ">
              "Amidst the hallowed grounds, I found serenity in the temple's
              sacred aura, seeking inner peace and solace."
            </p>
          </div>
        </div>
        <div className="card border border-gray-300 shadow hover:border-blue-500">
          <img
            src="upper2.jpeg"
            className="card-img-top border border-3"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              "Immerse yourself in the world of makeup artistry at our bootcamp,
              where expertise meets creativity to unleash your full potential."
            </p>
          </div>
        </div>
        <div className="card border border-gray-300 shadow hover:border-blue-500">
          <img
            src="upper8.jpeg"
            className="card-img-top border border-3"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              "As I witnessed the union of two hearts, a tapestry of emotions
              unfurled, weaving a beautiful tale of love and joy during the
              blissful marriage ceremony."
            </p>
          </div>
        </div>
      </div>

      <div className="card text-bg-dark mx-3 md:mx-8 lg:mx-16 border border-gray-300 shadow hover:border-blue-500">
        <img
          src="slider2.jpg"
          className="card-img border border-3 "
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-title text-white"></h5>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mx-3 md:mx-8 lg:mx-16 ">
        <div className="col ">
          <img
            src="face2.jpeg"
            className="card-img-top border border-3 rounded float-start"
            alt="..."
          />
        </div>
        <div className="col">
          <div className="card h-100 border border-gray-300 shadow hover:border-blue-500">
            <div className="card-body">
              <div className="text d-flex gap-3">
                <h1 className="text-center">Hello Buddy... </h1>
              </div>
              <p className="card-text">
                "Life's true beauty lies not only in the pursuit of our dreams
                but also in savoring the journey, cherishing each moment along
                the way. Embrace the magic of both the destination and the path,
                for it is in the harmony of our goals and dreams that we find
                the essence of true joy and fulfillment." <tr />
                "Life is a canvas of endless possibilities, where each
                brushstroke of experience creates a masterpiece of memories.
                Embrace the colors of love, laughter, and resilience, for it is
                in navigating the contrasts that we find the true beauty of our
                journey." <tr />
                "Makeup is an art that celebrates individuality, accentuating
                beauty from within and empowering self-expression in every
                stroke." "Behind each brush lies the power to unveil confidence,
                creating a canvas that reflects the unique essence of every
                soul."
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <img
            src="face23.jpeg"
            className="card-img-top border border-3 rounded float-end"
            alt="..."
          />
        </div>
      </div>

      <div className="container mt-4 ">
      <h1 className="text-center mb-4">Beauty That Cannot Define..</h1>
        <div className="row">
          <div className="col-6">
            <div className="card border border-gray-300 shadow hover:border-blue-500">
              <img
                src="d1.jpeg"
                className="card-img-top border border-3"
                alt="Image 1"
              />
              <div className="card-body"><h6>Nature's golden kiss, illuminating the world with warmth and radiance...</h6></div>
            </div>
          </div>
          <div className="col-6">
            <div className="card border border-gray-300 shadow hover:border-blue-500">
              <img
                src="d2.jpeg"
                className="card-img-top border border-3"
                alt="Image 2"
              />
              <div className="card-body"><h6>A serene silver glow, casting a celestial charm upon the night's canvas...</h6></div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Blogs;
