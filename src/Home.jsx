import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

function Home() {
  const backgroundImageUrl = "./updated_bg.jpg"; // Update with your image path

  return (
    <div
      className="w-screen min-h-screen bg-cover bg-center bg-no-repeat mx-0 px-0"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        width: "1920px",
        height: "12500px",
      }}
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default Home;
