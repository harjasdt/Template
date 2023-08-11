import React from "react";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Nav2() {
  const navigate = useNavigate();

  const HomePage = () => {
    navigate("/");
  };
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-[#536162] p-4 pb-4 z-10 mb-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-lg">
            Finesse360
            </a>
          </div>

          <div className="flex items-center">
            <button onClick={HomePage}>
              <HiX className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
