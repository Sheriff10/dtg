import React from "react";
import { FaBars, FaCaretDown } from "react-icons/fa";
import { FloatBtn } from "./spinners";

export default function Header() {
   const toggleMenu = () => {
      document.querySelector(".header .kl").classList.toggle('active')
   }
   return (
      <div className="header py-3 i-wrapper lg-shadow trans">
         <FloatBtn />
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-3">
                  <div className="logo-con">
                     <div className="l-text">
                        <img
                           src="/dtg.png"
                           alt="DefiTigerToken"
                           className="img-fluid"
                        />
                        <span className="fw-bold text-light mx-2 shadow">
                           DEFI <span className="dtg-pri-light">TIGER</span>{" "}
                           TOKEN
                        </span>
                     </div>
                     <div className="l-menu">
                        <i className="fs-6 text-white dtg-bg-sec" onClick={toggleMenu} ><FaBars /></i>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 kl trans">
                  <div className="x ">
                     {" "}
                     <br /> <br />
                     <i className="dtg-bg-pri-dark text-light rounded p-2 fs-4 fw-bold px-3 m-2" onClick={toggleMenu}>
                        x
                     </i>
                  </div>
                  <ul className=" p-0  justify-content-around  mx-lg-auto fw-bold">
                     <li>
                        <a href="#about">About</a>
                     </li>
                     
                     <li><a href="#team">Team</a></li>
                     <li>
                        {/* dropdown */}
                        <div class="dropdown trans">
                           <a href="https://drive.google.com/file/d/1MFGA3QtdfdjPNEbNafBWp2J0knjcTksz/view?usp=sharing" class="dropbtn trans">
                              CLAW PAPER V1 <FaCaretDown />
                           </a>
                           <div class="dropdown-content">
                              <a href="https://solidity.finance/audits/DefiTiger/">Audit</a>
                              <a href="https://dexscreener.com/bsc/0xd2e4a524d1a932adbc70fb41f2bec05884d5f6c2">Chart</a>
                              <a href="https://app.unicrypt.network/amm/pancake-v2/pair/0xD2e4a524d1a932adbC70fb41F2bEC05884d5f6C2">Liquidty</a>
                           </div>
                        </div>
                     </li>
                     <li>
                        <a href="#how-to-buy">How to buy</a>
                     </li>
                     <li>
                        {/* dropdown */}
                        <div class="dropdown trans">
                           <a href="#tigration" class="dropbtn trans">
                              Tigration <FaCaretDown />
                           </a>
                           <div class="dropdown-content">
                              <a href="#faqs">FAQs</a>
                              <a href="#socials">Socials</a>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
               <div className="col-lg-3 bb">
                  <div className="btn-con d-flex justify-content-end">
                     <a href="https://pancakeswap.finance/swap?outputCurrency=0xb1957BDbA889686EbdE631DF970ecE6A7571A1B6" className="btn dtg-bg-pri-light text-light px-5 py-3 rounded-pill">
                        {" "}
                        Buy Now
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
