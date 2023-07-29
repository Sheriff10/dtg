import React from "react";
import { FaBars, FaCaretDown } from "react-icons/fa";
import { FloatBtn } from "./spinners";

export default function Header() {
   const toggleMenu = () => {
      document.querySelector(".header .kl").classList.toggle('active')
   }
   return (
      <div className="header py-3 shadow trans">
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
                     <li>
                        {/* dropdown */}
                        <div class="dropdown trans">
                           <a class="dropbtn trans">
                              CLAW PAPER V1 <FaCaretDown />
                           </a>
                           <div class="dropdown-content">
                              <a href="#">Audit</a>
                              <a href="#">Chart</a>
                              <a href="#">Liquidty</a>
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
                     <button className="btn dtg-bg-pri-light text-light px-5 py-3 rounded-pill">
                        {" "}
                        Buy Now
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
