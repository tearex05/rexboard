import React from "react";
import pic6 from "./assets/pic6.png";
import pic1 from "./assets/pic1.jpg";
import pic7 from "./assets/pic7.png";
import pic3 from "./assets/pic3.png";
import pic5 from "./assets/pic5.png";
import blob from "./assets/blob.svg";
import recycle from "./assets/recycle.svg";
import KeyBoard from "./KeyBoard";

function App() {
  return (
    <>
      <div
        className="w-full h-screen flex flex-row items-center justify-center relative bg text-blac overflow-hidden relative"
        id="home"
      >
        <div className="absolute lg:relative w-full lg:w-1/2 h-screen flex flex-col items-center justify-center z-40 shadowx load1 opacity-0">
          <h1 className="font2 text-7xl font-bold tracking-wide sm:text-8xl md:text-9xl">
            RexBoard
          </h1>
          <p className="text-2xl text-zinc-950 font-black w-2/3 text-center">
            We Build Premium KeyBoards For AnyBody With AnyPurpose
          </p>
          <button
            href="#keyboards"
            className="bg-blue-600 p-3 hover:px-5 rounded my-6 text-white border-2"
          >
            See Our KeyBoards
          </button>
        </div>
        <div className="full flex items-center justify-center relative blur-sm lg:blur-0 lg:w-1/2 load2 opacity-0">
          <img src={blob} className="w-2/3" />
          <img src={pic6} className="w-full -rotate-6 z-20 absolute" />
        </div>
      </div>
      <div
        className="w-full py-12 flex flex-col items-center justify-center"
        id="keyboard"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">
          TEST OUR KEYBOARDS
          <br />
          <span className="text-6xl text-blue-500">THEN BUY THEM</span>
        </h1>
        <KeyBoard />
      </div>
      <div className="w-full mt-40 px-20" id="keyboards">
        <h1 className="text-4xl sm:text-5xl text-center font-black mb-20">
          SOME OF OUR GREAT KEYBOARDS
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-content-center">
          <div className="w-full p-2 bg-zinc-900 rounded flex items-center flex-col text-white hover:-translate-y-1 sx">
            <img src={pic3} className="w-full -translate-y-8 translate-x-8" />
            <p className="font-black text-2xl self-start">Mechanical KeyBoards</p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              ullam.
            </p>
            <p className="font-bold text-xl">Price: $200</p>
          </div>
          <div className="w-full p-2 bg-zinc-200 rounded flex items-center flex-col text-black hover:-translate-y-1 sx">
            <img src={pic5} className="w-full -translate-y-8 translate-x-8" />
            <p className="font-black text-2xl self-start">Simple KeyBoards</p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              ullam.
            </p>
            <p className="font-bold text-xl">Price: $150</p>
          </div>
          <div className="w-full p-2 bg-emerald-300 rounded flex items-center flex-col text-black hover:-translate-y-1 sx">
            <img src={pic7} className="w-full -translate-y-8 translate-x-8" />
            <p className="font-black text-2xl self-start">Cool KeyBoards</p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              ullam.
            </p>
            <p className="font-bold text-xl">Price: $210</p>
          </div>
        </div>
      </div>
      <div className="w-full relative flex items-center justify-center text-center hx mt-32">
        <h1 className="absolute font-bold text-4xl px-20 z-30">
          We Use ReCycled Materials To Make Our KeyBoards
        </h1>
        <img src={recycle} className="w-1/3 rotate blur rounded-full" />
      </div>
      <div
        className="w-10/12 mx-auto rounded-2xl mt-40 mb-10 bg h-80 flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <h1 className="text-white font-black text-4xl">
          What Are You Waiting For?
        </h1>
        <button className="bg-blue-600 p-3 hover:px-5 rounded my-3 text-white border-2">
          ORDER NOW
        </button>
      </div>
      <div className="w-full py-4 flex items-center justify-center text-center italic">
        <a href="https://tearex05.github.io/tearex/">
          Made By <span className="text-blue-500">TEAREX</span>
        </a>
      </div>
    </>
  );
}

export default App;
