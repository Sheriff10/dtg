import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperCard from "./swiperCard";
import { Spinners } from "./spinners";

export default function Faqs() {
   const progressCircle = useRef(null);
   const progressContent = useRef(null);
   const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
   };

   return (
      <div className="faqs dtg-bg-sec text-light py-5" id="faqs">
         <div className="container">
            <div className="fq-head fw-bold py-4">
               <h1>
                  <span className="dtg-pri-dark fw-bold">$DTG</span> FAQs <Spinners />
               </h1>
            </div>
            <div className="fq-body">
               <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                     delay: 2500,
                     disableOnInteraction: false,
                  }}
                  pagination={{
                     clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="mySwiper"
               >
                  <SwiperSlide>
                     <SwiperCard
                        title={"Why Defi Tiger Token?"}
                        body={
                           "In a huge registry of Meme tokens in the DeFi Space, DefiTiger is one of a few tokens to have taken a truly Altruistic Direction and care for more than crypto. We have chosen to share our passion for Big Feline Conservation with the world. And thus was Born the DefiTiger Token."
                        }
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <SwiperCard
                        title={"Only Tigers?"}
                        body={
                           "While Tigers are the Major thrust of this asset, we also care about declining big Feline populations around the world. From Panthers in the Americas to Lions in the African Savannah,We care about every Big Cat."
                        }
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <SwiperCard
                        title={"Any More Use Cases?"}
                        body={
                           "We are also big on full DeFi Adoption by the larger Global Community, and because of this we are planning on building a blockchain that boasts a fast and cheap architecture; that can be fully integrated in the larger society and give people freedom to spend their income without fear of Centralization."
                        }
                     />
                  </SwiperSlide>

                  <div className="autoplay-progress" slot="container-end">
                     <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                     </svg>
                     <span ref={progressContent}></span>
                  </div>
               </Swiper>
            </div>
         </div>
      </div>
   );
}
