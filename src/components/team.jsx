import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Team() {
   const teamFunc = (img, name, role, about, link) => {
      return { img, name, role, about, link };
   };
   const teamArr = [
      teamFunc(
         "",
         "Founder DefiTigerToken",
         "Crypto Wealth Embassy",
         "Crypto Wealth Embassy is the Founder of DefiTigertoken, one of Africa meme token with a strong community backing. He is a Solidity Developer and the Head Of Tutorials of SMC Dao, a community of Believers which is focused on teaching people about the Digital Economy. ",
         [
            {link: "https://twitter.com/CWEmbassy", icon: <FaTwitter />},
         ]
      ),
      teamFunc(
         "",
         "Operations Manager at DefiTiger Token ",
         "Collins Romanus A.K.A Lone Wolf ",
         "As the Operations Manager, Lone Wolf brings a wealth of expertise and a strategic mindset to our organization. With their exceptional leadership skills and a knack for optimizing processes, Lone Wolf ensures smooth and efficient operations across all departments.",
         [
            {link: "https://twitter.com/LoneWolf_xyz", icon: <FaTwitter />},
         ]
      ),
      teamFunc(
        "",
        "Head Moderator ",
        "Phoenix",
        "As the Head of Moderators, Phoenix plays a crucial role in ensuring the safety and harmony of our online communities. With a keen sense of responsibility and a passion for maintaining a positive environment, Phoenix leads our team of moderators with unwavering dedication.",
        [
            {link: "https://twitter.com/LoneWolf_xyz", icon: <FaTwitter />},

        ]
     ),
     teamFunc(
        "",
        "Head Of Graphics",
        "Ayo Timi",
        "With an eye for captivating visuals and a passion for artistic expression, Ayo Timi is the mastermind behind our extraordinary graphics. As the Head of Graphics, 	Ayo Timi brings unparalleled creativity, skill, and expertise to our team.",
        [
            {link: "https://twitter.com/LoneWolf_xyz", icon: <FaTwitter />},
        ]
     ),
     teamFunc(
        "",
        "Web Developer",
        "Sheezey",
        "Experienced Fullstack Web Developer and Software Engineer with 4 years' expertise. Proficient in diverse technologies and dedicated to delivering robust web solutions. Updated with latest trends and passionate about problem-solving. Ready to contribute effectively to any project.",
        [
            {link: "https://twitter.com/sheezey_", icon: <FaTwitter />},
            {link: "https://t.me/sheezey1", icon: <FaTelegram />},
            {link: "https://www.linkedin.com/in/sheriff-ibrahim-791724201/", icon: <FaLinkedin />},
            {link: "https://github.com/sheriff10", icon: <FaGithub />},
        ]
     ),
   ];
   return (
      <div className="team py-5" id="team">
         <div className="container">
            <div className="t-header text-center text-light py-4">
               <h1>Meet The Team</h1>
            </div>
            <div className="row">
               {teamArr.map((i, index) => (
                  <div className="col-lg-3 text-light col-6 my-3" key={index}>
                     <div className="team-con trans py-2 shadow">
                        <div className="head text-center py-3">
                           <img src="t.png" alt="Team" /> <br />
                           <small>{i.name} </small> <br />
                           <span className="fw-bold fs-5 dtg-pri-dark">
                              {i.role}
                           </span>
                        </div>
                        <div className="body p-3">
                           <div className="t-text">
                              <small className="text-gray">{i.about}</small>
                           </div>
                           <div className="t-socials pt-lg-4 pt-sm-4">
                              <div className="d-flex flex-wrap gap-2 justify-content">
                                 {i.link.map((link, index) => (
                                    <a href={link.link} key={index} className="pb-2">
                                       <i>
                                          {link.icon}
                                       </i>
                                    </a>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
