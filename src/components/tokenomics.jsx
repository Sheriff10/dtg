import React from "react";
import { FaBurn, FaChild, FaGripfire, FaHandHolding, FaRocket, FaSyncAlt, FaTruckMoving } from "react-icons/fa";

export default function Tokenomics() {
   const tkFunc = (icon, text, title) => {
      return { icon, text, title };
   };
   const tkArr = [
      tkFunc(<FaBurn />, "Burn", "3%"),
      tkFunc(<FaChild />, "Charity/Development", "3%"),
      tkFunc(<FaHandHolding />, "Holders Reward", "3%"),
      tkFunc(<FaSyncAlt />, "Max Supply ", "1 Quadrillion"),
      tkFunc(<FaRocket />, "Total Supply", "989+ trillion"),
      tkFunc(<FaTruckMoving />, "Max Supply", "689+ trillion"),
      tkFunc(<FaGripfire />, "Initial Burn", "300+ trillion"),
   ];
   return (
      <div className="tk dtg-bg-sec">
         <div className="tk-wrapper">
            <div className="tk-head text-center fw-bold text-light py-5 px-3">
               <h1>Tigration</h1>
               <small className="text-gray">
                  Defi Tiger has a <span className="dtg-pri-light"> 9% Transaction Fee</span>, We fondly refer to this
                  unique 9% fee as a{" "}
                  <span className="dtg-pri-light">Tigration</span>.
               </small>
            </div>
            <div className="container">
               <div className="row">
                  {tkArr.map((i, index) => (
                     <div className="col-lg-4 col-6 text-lg-center py-3 px-3" key={index}>
                        <div className="box">
                           <div className="b-head">
                              <i className="fs-3 dtg-pri-dark">
                                 {i.icon}
                              </i>
                           </div>
                           <div className="b-body fw-bold">
                              <span className="text-light fs-2">{i.title}</span> <br />
                              <small className="text-gray ">{i.text}</small>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
