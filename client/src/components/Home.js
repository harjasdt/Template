import React from "react";
import pic from "../assets/banner.png";
import Nav3 from "./Nav3";

export default function Home() {
  return (
    <div class="flex pt-20 h-screen bg-white">
      <Nav3/>
  <div class="flex flex-row justify-center items-center text-center w-full">
    <div class="w-full sm:w-1/2 pb-8 text-center">
      <h1 class="font-extrabold text-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4 font-funky">
        Financial <span class="text-[#C06014]">Literacy</span>
      </h1>
      <p class="text-black text-lg mb-6">Unlocking the art of financial finesse with Finesse360.</p>
    </div>
    <img
      class="hidden md:block w-auto h-[500px] md:h-200"
      alt="pic"
      src={pic}
    />
  </div>
</div>
  );
}
