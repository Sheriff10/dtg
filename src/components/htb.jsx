import React from "react";
import { Spinners } from "./spinners";

export default function Htb() {
   const htbFunc = (title, text) => {
      return { title, text };
   };
   const htbArr = [
      htbFunc(
         "Create Metamask",
         "Go to the App Store and Download any Custodial wallet (E.g. Trust Wallet, Metamask, SafaPal)"
      ),
      htbFunc(
         "Purchase BNB",
         "Purchase BNB Smart Chain (Bep 20) via any CEX (Binance, kucoin etc...) and deposit into your wallet address."
      ),
      htbFunc(
         "Swap BNB to $DTG",
         "Copy the Contract Address and head over to PancakeSwap or Poocoin DEX, Paste the Contract Address to import $DTG then proceed to swap BNB to DTG."
      ),
   ];
   return (
      <div className="htb dtg-bg-sec py-5" id="how-to-buy">
         <div className="container mt-5 position-relative">
            <div className="htb-header text-light text-center shadow">
               <h1>
                  <Spinners position={"top-0 end-0"} />
                  <Spinners position={"bottom-0 start-0"} />
                  How to Buy <span className="dtg-pri-light">$DTG</span>{" "}
                  <img
                     src="dtg.png"
                     alt="DTG"
                     className="img-fluid "
                     width={70}
                  />
               </h1>
            </div>
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="htb-img-head text-light"></div>
                  <div className="htb-img text-center">
                     <img
                        src="/htb2.png"
                        alt="How to Buy"
                        className="img-fluid"
                        width={300}
                     />{" "}
                     <br />
                     <img
                        src="/htb3.png"
                        alt="How to Buy"
                        className="img-fluid"
                        width={300}
                     />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="htb-body">
                     {htbArr.map((i, index) => (
                        <div className="d-flex py-4 my-5" key={index}>
                           <div className="col-1 text-black">
                              <i className="dtg-bg-pri-light rounded-circle no">
                                 {index + 1}
                              </i>
                           </div>
                           <div className="col-11 ps-3">
                              <div className="head fw-bold text-light">
                                 {i.title}
                              </div>
                              <div className="body text-gray">
                                 <span>{i.text}</span>
                              </div>
                           </div>
                        </div>
                     ))}
                     <div className="intro-btn d-flex gap-3 my-4 justify-content-center">
                        <a className="btn btn-lg bg-light w-lg-25 w-100 rounded-pill fw-bold">
                           {" "}
                           Pancakeswap
                        </a>
                        <a className="btn btn-lg dtg-bg-pri-light w-lg-25 w-100 rounded-pill fw-bold ">
                           {" "}
                           Poocoin
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
