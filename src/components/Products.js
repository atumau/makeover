import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Products = () => {
  return (
    <>
      
      <div className="row mt-4 mb-4 row-cols-1 row-cols-md-2 g-4 mx-3 md:mx-8 lg:mx-16">
        <div className="row ">
          <div className="col-sm-6">
            <div className="card border border-gray-300 shadow hover:border-blue-500">
              <img src="concelor.jpg" class="card-img-top" alt="concelor"></img>
              <div className="card-body">
                <h5 className="card-title text-center">Concealer</h5>
                <p className="card-text text-justify">
                Concealer is similar to foundation except it's generally thicker and hides dark circles, age spots, blemishes and more by hiding pigments and blending these imperfections into the skin.
                </p>
                <Link to="/cart" className="btn btn-primary d-grid gap-2 col-6 mx-auto">
                ₹452/-
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card border border-gray-300 shadow hover:border-blue-500">
              <img src="mascara.jpg" class="card-img-top" alt="mascara"></img>
              <div className="card-body">
                <h5 className="card-title text-center">Mascara</h5>
                <p className="card-text text-justify">
                Mascaras are pigmented preparations for application to the eyelashes to make them look darker and longer and to make the whites of the eyes look brighter by contrast.
                </p>
                <Link to="/cart" className="btn btn-primary d-grid gap-2 col-6 mx-auto">
                ₹899/-
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-6 ">
            <div className="card border border-gray-300 shadow hover:border-blue-500 ">
              <img src="foun.webp" class="card-img-top" alt="foundation"></img>
              <div className="card-body ">
                <h5 className="card-title text-center">Foundation</h5>
                <p className="card-text text-justify">
                Foundation is a liquid, cream, or powder makeup applied to the face and neck to create an even, uniform color to the complexion, cover flaws and, sometimes, to change the natural skin tone.
                </p>
                <Link to="/cart" className="btn btn-primary d-grid gap-2 col-6 mx-auto">
                ₹1099/-
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card border border-gray-300 shadow hover:border-blue-500">
              <img src="eyel.jpg" class="card-img-top" alt="eyeliner"></img>
              <div className="card-body">
                <h5 className="card-title text-center">Eyerline</h5>
                <p className="card-text text-justify">
                Eye liner can be drawn above upper lashes or below lower lashes or both, even on the water lines of the eyes. Its primary purpose is to make the lashes look lush.
                </p>
                <Link to="/cart" className="btn btn-primary d-grid gap-2 col-6 mx-auto">
                ₹750/-
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 row-cols-1 row-cols-md-2 g-4 mx-3 md:mx-8 lg:mx-16">
        <div className="row mb-4 ">
          <div className="col-sm-6">
            <div className="card border border-gray-300 shadow hover:border-blue-500">
              <img src="highliter.webp" class="card-img-top" alt="highliter"></img>
              <div className="card-body">
                <h5 className="card-title text-center">Highlighter</h5>
                <p className="card-text text-justify">
                Highlighter is a double-whammy product, attracting light and enhancing skin tone, for a lit-from-within look, and can be used to accentuate and "lift" bone structure.
                </p>
                <Link to="/cart" className="btn btn-primary d-grid gap-2 col-6 mx-auto">
                ₹685/-
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card border border-gray-300 shadow hover:border-blue-500">
              <img src="eyepri.webp" class="card-img-top" alt="eyeprimer"></img>
              <div className="card-body">
                <h5 className="card-title text-center">Eye Primer</h5>
                <p className="card-text text-justify">
                Eyeshadow primer is a liquid- or cream-based product that is used eyelids to make shadows and eyeliner smoother to last longer.Serves as a double-sided tape of sorts.
                </p>
                <Link to="/cart" className="btn btn-primary d-grid gap-2 col-6 mx-auto">
                ₹735/-
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-6 ">
            <div className="card border border-gray-300 shadow hover:border-blue-500">
              <img src="eyebro pencil.webp" class="card-img-top" alt="eyebro pencil"></img>
              <div className="card-body ">
                <h5 className="card-title text-center">Eyebrow Pencil</h5>
                <p className="card-text text-justify">
                Eyebrow Pencils are products that apply color to the eyebrows. They are used to fill in and define the eyebrows. They contain special ingredients that apply color where it is needed.
                </p>
                <Link to="/cart" className="btn btn-primary d-grid gap-2 col-6 mx-auto">
                ₹340/-
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card border border-gray-300 shadow hover:border-blue-500">
              <img src="eyes.webp" class="card-img-top" alt="eyeshadow"></img>
              <div className="card-body">
                <h5 className="card-title text-center">Eyeshadow</h5>
                <p className="card-text text-justify">
                It is a cosmetic applied primarily to the eyelids to attract attention to the wearer's eyes, making them stand out or look more attractive.Also applied under the eyes,cheeks,brow bones. 
                </p>
                <Link to="/cart" className="btn btn-primary d-grid gap-2 col-6 mx-auto">
                ₹400/-
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Products;
