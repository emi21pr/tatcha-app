import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import StickyBar from "../components/StickyBar";
import Vsl from "../components/Vsl";
import Trouble from "../components/Trouble";
import Ritual from "../components/Ritual";
import Presentations from "../components/Presentations";
import Bonus from "../components/Bonus";
import Checklist from "../components/Checklist";
import Authority from "../components/Authority";
import Social from "../components/Social";
import Questions from "../components/Questions";

function Home() {
  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-col scroll-smooth justify-center items-center">
      <StickyBar />
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full md:px-12 gap-12.5 px-4">
        <Hero />
        <Vsl />
        <Trouble/>
        <Ritual/>
        <Presentations/>
        <Bonus/>
        <Checklist/>
        <Authority/>
        <Social/>
        <Questions/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
