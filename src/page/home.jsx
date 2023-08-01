import React from "react";
import About from "../components/about";
import Faqs from "../components/faqs";
import Header from "../components/header";
import Htb from "../components/htb";
import Intro from "../components/intro";
import Roadmap from "../components/roadmap";
import Socials from "../components/socials";
import Team from "../components/team";
import Tokenomics from "../components/tokenomics";

export default function Home() {
   return (
      <div className="home">
         <div className="wrap">
            <Header />
            <Intro />
         </div>
         <About />
         <Htb />
         <Tokenomics />
         <Roadmap />
         <Team />
         <Faqs />
         <Socials />
      </div>
   );
}
