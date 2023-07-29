import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Socials() {
   const sFunc = (icon, name, link) => {
      return { icon, name, link };
   };
   const sArr = [
      sFunc(<FaTelegram />, "Telegram", "https://t.me/DefiTigertoken"),
      sFunc(<FaTwitter />, "Twitter", "https://twitter.com/defitigertoken"),
      sFunc(<FaInstagram />, "Instagram", "https://instagram.com/defitigertoken"),
      sFunc(<FaFacebook />, "Facebook", "https://www.facebook.com/DefiTigerToken/"),
      sFunc(<FaEnvelope />, "Email", "contact@defitigertoken.com"),
   ];
   return (
      <div className="socials" id="socials">
         <div className="container text-center">
            <div className="s-head py-5 col-lg-8 mx-auto">
               <h1 className="fw-bold">Socials</h1> <br />
               <span className="fs-6">
                  Our community of "
                  <span className="dtg-pri-light">
                     Defi Enthusiasts with <br /> a unique love for endangered
                     felines
                  </span>
                  " grow stronger with each passing day. Please follow our
                  social platforms to get the most up-to-date, accurate DTG
                  information.
               </span>
            </div>
            <div className="s-con d-flex flex-wrap gap-5 justify-content-center py-4">
               {sArr.map((i, index) => (
                  <div className="box" key={index}>
                     <a href={i.name === "Email" ? `mailto:${i.link}` : i.link} className="fs-2 dtg-bg-pri-light  trans rounded-circle text-center ">
                       {i.icon}
                     </a>
                     <br />
                     <br />
                     <small className="text-gray fw-bold">{i.name}</small>
                  </div>
               ))}
            </div>
         </div>
         <div className="copyright p-3 text-center border-top border-light">DEFI<span className="dtg-pri-light fw-bold ">TIGER</span> TOKEN © 2022</div>
      </div>
   );
}
