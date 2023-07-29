import React from "react";

export default function About() {
   return (
      <div className="about dtg-bg-sec text-light py-5" id="about">
         <div className="container">
            <div className="abt-header">
               <h1 className="fw-bold text-center py-3">
                  About <span className="dtg-pri-dark">DEFI TIGER</span>
               </h1>
            </div>
            <div className="abt-text col-lg-8 mx-auto text-center fs-6">
               <span>
                  DTG is a Decentralized Meme Asset Driven By A Community Of
                  Defi Enthusiasts With A Unique Love For Felines. <br />
                  <br />
                  With the calm ferocity of a Tiger and the Quiet Hum of a
                  Financial Hub, We believe we can change the world one
                  Transaction and one Tiger at a time.
               </span>
            </div>
            <div className="abt-img fs-6">
                  <div className="row">
                     <div className="col-lg-3 abt-i">
                        <div className="wrapper text-center rounded mt-5 p-2 py-4">
                           <img
                              src="abt1.png"
                              alt="Community Driven"
                              className="img-fluid py-3"
                           />{" "}
                           <br />
                           <span className="fw-bold text-gray">
                              Ownership Renounced
                           </span>
                        </div>
                     </div>
                     <div className="col-lg-3 abt-i">
                        <div className="wrapper text-center rounded mt-5 p-2 py-4">
                           <img
                              src="abt2.png"
                              alt="Community Driven"
                              className="img-fluid py-3"
                           />{" "}
                           <br />
                           <span className="fw-bold text-gray">
                              Locked Liquidity
                           </span>
                        </div>
                     </div>
                     <div className="col-lg-3 abt-i">
                        <div className="wrapper text-center rounded mt-5 p-2 py-4">
                           <img
                              src="abt3.png"
                              alt="Community Driven"
                              className="img-fluid py-3"
                           />{" "}
                           <br />
                           <span className="fw-bold text-gray">Burn</span>
                        </div>
                     </div>
                     <div className="col-lg-3 abt-i">
                        <div className="wrapper text-center rounded mt-5 p-2 py-4">
                           <img
                              src="abt4.png"
                              alt="Community Driven"
                              className="img-fluid py-3"
                           />{" "}
                           <br />
                           <span className="fw-bold text-gray">Charity</span>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
      </div>
   );
}
