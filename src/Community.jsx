import React from "react";

function Community() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url(getData_bg.png)", // Add your space image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="flex items-center justify-center m-4 flex-col">
        <p className="rounded-3xl bg-zinc-200 px-4 py-2 text-4xl font-semibold">
          Global Community
        </p>
        <div className="flex flex-row">
          <a href="https://discord.gg/cTcxpBJGsU">
            <img src="discord_icon.png" alt="" className="w-20 h-20 m-2 mx-8" />
            <p className="text-white text-2xl text-center">Discord</p>
          </a>

          <a
            href="https://www.youtube.com/@TeamORCA-j1z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="YouTube_icon.png"
              alt=""
              style={{ width: "93px", height: "93px" }}
              className="mx-8"
            />
            <p className="text-white text-2xl pt-1 text-center">YouTube</p>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center m-4 mt-10">
        <p className="rounded-3xl bg-zinc-200 px-4 py-2 text-4xl font-semibold">
          Global Collaborations
        </p>
        <div className="flex flex-row mt-8">
          <img
            src="nkc.png"
            alt=""
            style={{ height: "150px", width: "auto", objectFit: "contain" }}
            className="mx-8"
          />
          <img
            src="hull.png"
            alt=""
            style={{ height: "150px", width: "auto", objectFit: "contain" }}
            className="mx-8 bg-black"
          />
        </div>
        <p className="text-xl text-white p-10">
          We have already collaborated with institutions like Noazesh Knowledge
          Center, Bangladesh and the University of Hull,UK to exchange knowledge
          and conduct workshops. We’re actively exploring further partnerships
          to expand our reach.
        </p>
      </div>
    </div>
  );
}

export default Community;
