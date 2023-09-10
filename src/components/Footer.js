import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container ">
      <div className="card text-white bg-dark mt-4">
        <div className="card-body p-md-4">
          <div className="d-flex flex-column align-items-center">
            <h3 className="mb-3">Follow Us</h3>
            <div className="d-flex flex-wrap justify-content-center">
              <p className="me-4 mb-3" title="Github">
                <Link to="https://www.facebook.com/">
                  <BsFacebook color="rgba" size={30} />
                </Link>
              </p>
              <p className="me-4 mb-3" title="Instagram">
                <Link to="https://www.instagram.com/">
                  <BsInstagram color="rgba" size={30} />
                </Link>
              </p>
              <p className="me-4 mb-3" title="Telegram">
                <Link to="https://t.me/+zo6Zj4rbB9QxNjI1">
                  <BsTelegram color="rgba" size={30} />
                </Link>
              </p>
              <p className="me-4 mb-3" title="Youtube">
                <Link to="https://chat.whatsapp.com/ESS7aMjqtwWH5jROfIg7WD">
                  <BsWhatsapp color="rgba" size={30} />
                </Link>
              </p>
              <p className="me-4 mb-3" title="LinkedIn">
                <Link to="https://www.linkedin.com/in/atul-maurya-83077a18b/">
                  <BsLinkedin color="rgba" size={30} />
                </Link>
              </p>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <p>Email: mauryaatul328@gmail.com</p>
              <p>Phone: +91-8400052053</p>
              <p>Address: 123 Main Street, Kashmiri Gate, New Delhi, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
