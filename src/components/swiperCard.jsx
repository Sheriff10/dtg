import React from "react";

export default function SwiperCard({title, body}) {
   return (
      <div className="sw-c">
         <div className="container">
            <div className="fq-card  p-5 rounded">
               <div className="head py-2">
                  <span className="fs-3 text-black fw-bold">
                     {title}
                  </span>
               </div>
               <div className="body py-2">
                  <span>
                     {body}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}
