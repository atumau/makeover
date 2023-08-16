import React from "react";

const Cards = () => {
  return (
    <div>
      <h1 className="text-center mt-2 mb-3">follow@LakmeMakeover</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4 mx-3 md:mx-8 lg:mx-16">
        <div className="col">
          <div class="card border border-gray-300 shadow hover:border-blue-500">
            <img src="card1.webp" class="card-img-top border border-3" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Gujarati Bridal Bindi Design</h5>
              <p class="card-text">
                Much similar to Bengali bindi design, many Rajasthani and
                Gujarati brides use to put on a dotted pattern on their
                foreheads. Though the practice is not that popular nowadays, you
                can still choose to bask in this tradition.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border border-gray-300 shadow hover:border-blue-500">
            <img src="card2.webp" className="card-img-top border border-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Chandon Siri Bridal Bindi Design</h5>
              <p className="card-text">
                Handon Siri Chingba, or Bindi as it is known in many regions of
                Manipur, is a traditional design made from sandalwood paste and
                is considered an integral part of a bride-to-be's wedding
                attire.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border border-gray-300 shadow hover:border-blue-500">
            <img src="card31.webp" className="card-img-top border border-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Minimalistic Makeup</h5>
              <p className="card-text">
                ABH confirms, “Dewy skin, minimalistic look and a lipstick that
                stays put for long hours, are the vehicles for storytelling.
                Clean, fresh and dewy are words synonymous with Spring/Summer
                2023 Brides.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border border-gray-300 shadow hover:border-blue-500">
            <img src="card4.webp" className="card-img-top border border-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mini Dotted Bindi Design</h5>
              <p className="card-text">
                If you don't want to put a stick-on bindi design for your
                wedding day, you can always get it beautifully drawn by your
                makeup artist to add a personal touch to your bridal avatar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
