import React from "react";
import { Spinners } from "./spinners";

export default function Intro() {
   return (
      <div className="intro">
         <div className="bg-con">
            <div className="i-wrapper">
               <div className="container">
                  <div className="row position-relative align-items-center">
                     <div className="col-lg-8">
                        <div className="intro-text text-light">
                           <h1>
                              A Decentralized Meme Asset Driven By A Community
                              Of Defi Enthusiasts With A Unique Love For
                              Felines.
                           </h1>
                           <span className="fw-bold fs-6 text-gray">
                              Roar with Power:{" "}
                              <span className=" dtg-pri-light fs-4">
                                 Embrace the Tiger
                              </span>{" "}
                              Within!
                           </span>
                           <div className="intro-btn d-flex gap-3 my-4">
                              <a className="btn btn-lg bg-light  rounded-pill fw-bold">
                                 {" "}
                                 CHART
                              </a>
                              <a className="btn btn-lg dtg-bg-sec  rounded-pill fw-bold text-light">
                                 {" "}
                                 BUY
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 i-m position-relative">
                        <div className="intro-img">
                           <Spinners position={"bottom-0 start-0"} />
                           <Spinners position={"top-0 end-0"} />
                           <img
                              src="dtgIntro.png"
                              alt="DefiTigerToken"
                              className="img-fluid"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
